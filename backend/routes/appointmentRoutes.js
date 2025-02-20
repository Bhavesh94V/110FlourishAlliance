const express = require('express');
const router = express.Router();
const { Appointment } = require('../models');
const cors = require('cors');

router.use(cors({
    origin: ['http://localhost:3000', 'http://your-production-domain.com'],
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

const validateAppointment = (req, res, next) => {
    const { firstName, lastName, email, phone, reason, details, address, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !reason || !details || !address || !date || !time) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    next();
};

router.post('/book-appointment', validateAppointment, async (req, res) => {
    const { firstName, lastName, email, phone, reason, details, address, date, time } = req.body;

    try {
        const newAppointment = await Appointment.create({
            firstName, lastName, email, phone, reason, details, address, date, time
        });
        console.log('Appointment saved:', newAppointment);
        res.status(201).json({ message: 'Appointment booked successfully!', appointment: newAppointment });
    } catch (err) {
        console.error('Error saving appointment:', err);
        res.status(500).json({ error: 'Server error, please try again later', details: err.message });
    }
});

router.get('/health', (req, res) => {
    res.status(200).send('API is working properly!');
});


module.exports = router;  