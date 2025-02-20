const Appointment = require('../models/Appointment');
exports.bookAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};