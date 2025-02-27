const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();
const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');
const axios = require("axios");

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    secure: true,
    tls: {
        rejectUnauthorized: false,
    },
});


// Homepage PopUp Form
app.post("/send-email", async (req, res) => {
    const { name, surname, email, contact, category } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `${name} Visited The Flourish Alliance`,
        html: `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${name} ${surname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Category:</strong> ${category}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
    
});

// ✅ Email Function for Eligibility Form
const sendEligibilityEmail = (formData, cvPath) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Eligibility Form Submission',
        text: `
        First Name: ${formData.firstName}
        Middle Name: ${formData.middleName}
        Last Name: ${formData.lastName}
        Contact: ${formData.contact}
        Email: ${formData.email}
        Country: ${formData.country}
        Enquiry: ${formData.enquiry}
        Education: ${formData.education}
        Date of Birth: ${formData.dob}
        Gender: ${formData.sex}
        `,
        attachments: cvPath ? [{
            filename: `CV-${formData.firstName}.pdf`,
            path: cvPath
        }] : []
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending eligibility email:', err);
        } else {
            console.log('Eligibility Email sent:', info.response);
        }
    });
};

app.post('/api/submit-eligibility', upload.single('cv'), async (req, res) => {
    const { firstName, middleName, lastName, contact, email, country, enquiry, education, dob, sex } = req.body;
    const cvPath = req.file ? req.file.path : null;

    if (!firstName || !lastName || !contact || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const query = `INSERT INTO eligibility (first_name, middle_name, last_name, contact, email, country, enquiry, education, dob, sex, cv_path)
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
        const values = [firstName, middleName, lastName, contact, email, country, enquiry, education, dob, sex, cvPath];

        await pool.query(query, values);

        sendEligibilityEmail({ firstName, middleName, lastName, contact, email, country, enquiry, education, dob, sex }, cvPath);

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        console.error('Error inserting into database:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// ✅ Email Function for Appointment Email Form

const sendAppointmentEmail = (appointment) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL, // ✅ Aapka Email
        subject: 'New Appointment Booking',
        text: `
        First Name: ${appointment.firstName}
        Last Name: ${appointment.lastName}
        Email: ${appointment.email}
        Phone: ${appointment.phone}
        Reason: ${appointment.reason}
        Details: ${appointment.details}
        Address: ${appointment.address}
        Date: ${appointment.date}
        Time: ${appointment.time}
        `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending appointment email:', err);
        } else {
            console.log('Appointment Email sent:', info.response);
        }
    });
};

app.post('/api/book-appointment', async (req, res) => {
    const { firstName, lastName, email, phone, reason, details, address, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !reason || !details || !address || !date || !time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO appointments (first_name, last_name, email, phone, reason, details, address, appointment_date, appointment_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [firstName, lastName, email, phone, reason, details, address, date, time]
        );

        sendAppointmentEmail({ firstName, lastName, email, phone, reason, details, address, date, time });

        res.status(201).json({ message: 'Appointment booked successfully!', appointment: result.rows[0] });
    } catch (err) {
        console.error('Error during insertion:', err);
        res.status(500).json({ error: 'Failed to book appointment', details: err.message });
    }
});


// ✅ Email Function for Contact Email Form
const sendContactEmail = (formData) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Contact Form Submission',
        text: `
        Full Name: ${formData.full_name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
        `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending contact email:', err);
        } else {
            console.log('Contact Email sent:', info.response);
        }
    });
};

app.post('/api/contact', async (req, res) => {
    const formData = req.body;
    const { full_name, email, phone, message } = formData;

    try {
        const result = await pool.query(
            'INSERT INTO contact_form (full_name, email, phone, message) VALUES ($1, $2, $3, $4)',
            [full_name, email, phone, message]
        );

        sendContactEmail(formData);

        res.json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Failed to submit form.' });
    }
});

app.get('/api/health', (req, res) => {
    res.status(200).send('API is working properly!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
