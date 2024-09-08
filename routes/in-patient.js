const express = require('express');
const InPatient = require('../models/inPatient.js');


const router = express.Router();

//Add details of in Patient to DB
router.post('/add', async (req, res) => {
    try {
      const inPatient = new InPatient({ 
        patientId: req.body.patientId,
        roomNumber: req.body.roomNumber,
        roomType: req.body.roomType,
        date_adm: req.body.date_adm,
        date_dis: req.body.date_dis,
       });
      await inPatient.save();
      res.status(201).json(inPatient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

});




router.get('/', async (req, res) => {
    try {
        const inPatient = await InPatient.find();
        res.json(inPatient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;


