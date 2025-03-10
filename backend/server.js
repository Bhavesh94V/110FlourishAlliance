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

app.post('/send-email', async (req, res) => {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${fullname}`,
        text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email!' });
    }
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
        html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #e0e0e0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #ffffff; background-color: #d32f2f; padding: 15px; text-align: center; border-radius: 8px; margin-bottom: 20px; font-size: 24px;">
            📌 Eligibility Form Submission
        </h1>
        
        <h2 style="color: #333; font-size: 20px; border-bottom: 2px solid #d32f2f; padding-bottom: 5px;">
            📝 New Submission Details
        </h2>

        <p><strong style="color: #d32f2f;">First Name:</strong> ${formData.firstName}</p>
        <p><strong style="color: #d32f2f;">Middle Name:</strong> ${formData.middleName || 'N/A'}</p>
        <p><strong style="color: #d32f2f;">Last Name:</strong> ${formData.lastName}</p>
        <p><strong style="color: #d32f2f;">Contact:</strong> ${formData.contact}</p>
        <p><strong style="color: #d32f2f;">Email:</strong> ${formData.email}</p>
        <p><strong style="color: #d32f2f;">Country:</strong> ${formData.country}</p>
        <p><strong style="color: #d32f2f;">Enquiry:</strong> ${formData.enquiry}</p>
        <p><strong style="color: #d32f2f;">Education:</strong> ${formData.education}</p>
        <p><strong style="color: #d32f2f;">Date of Birth:</strong> ${formData.dob}</p>
        <p><strong style="color: #d32f2f;">Gender:</strong> ${formData.sex}</p>

        <div style="border-top: 2px solid #e0e0e0; margin: 20px 0;"></div>

        <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
    </div>
    `,
        attachments: cvPath
            ? [
                {
                    filename: `CV-${formData.firstName}.pdf`,
                    path: cvPath,
                },
            ]
            : [],
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
        subject: 'New Appointment Booking with Flourish Alliance',
        html: `
    <html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    color: #333;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 80%;
                    max-width: 600px;
                    margin: 30px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: red;
                    text-align: center;
                }
                h2 {
                    color: #333;
                    margin-top: 10px;
                    font-size: 20px;
                }
                p {
                    font-size: 16px;
                    line-height: 1.6;
                }
                .highlight {
                    font-weight: bold;
                    color: #333;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    color: red;
                    font-size: 14px;
                }
                .hr {
                    border: 0;
                    border-top: 1px solid #ddd;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Flourish Alliance</h1>
                <h2>New Appointment Booking</h2>
                <p>Dear Team,</p>
                <p>We have received a new appointment request. Below are the details:</p>
                <p><span class="highlight">First Name:</span> ${appointment.firstName}</p>
                <p><span class="highlight">Last Name:</span> ${appointment.lastName}</p>
                <p><span class="highlight">Email:</span> ${appointment.email}</p>
                <p><span class="highlight">Phone:</span> ${appointment.phone}</p>
                <p><span class="highlight">Reason for Appointment:</span> ${appointment.reason}</p>
                <p><span class="highlight">Details:</span> ${appointment.details}</p>
                <p><span class="highlight">Address:</span> ${appointment.address}</p>
                <p><span class="highlight">Date:</span> ${appointment.date}</p>
                <p><span class="highlight">Time:</span> ${appointment.time}</p>
                <div class="hr"></div>
                <p class="footer">Best regards, <br/> Flourish Alliance Appointment System</p>
            </div>
        </body>
    </html>
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
        html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; background-color: #f9fafb;">
        <h2 style="color: #1e3a8a; text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
            📩 New Contact Form Submission
        </h2>
        <p><strong style="color: #374151;">Full Name:</strong> ${formData.full_name}</p>
        <p><strong style="color: #374151;">Email:</strong> ${formData.email}</p>
        <p><strong style="color: #374151;">Phone:</strong> ${formData.phone}</p>
        <p><strong style="color: #374151;">Message:</strong></p>
        <p style="background-color: #e5e7eb; padding: 10px; border-radius: 5px; color: #1f2937;">${formData.message}</p>

        <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280;">
            &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
    </div>
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
