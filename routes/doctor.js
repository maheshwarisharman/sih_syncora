const express = require('express');
const Doctor = require('../models/doctor.js');


const router = express.Router();

//Add doctors to DB
router.post('/add', async (req, res) => {
  
    try {
      const doctor = new Doctor({ 
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        doctor_type: req.body.doctor_type,
        hospital_id: req.body.hospital_id,
       });
      await doctor.save();
      res.status(201).json(doctor);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

});

router.post('/addappointment', async (req,res) => {

    let str = req.body.appointments;
    let formattedStr = str.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');
    let arr = JSON.parse(formattedStr);

    try {
        // Find and update one document
        const result = await Doctor.findOne({_id: req.body.id});
        console.log(result.appointments);
        const newAppoints = arr.concat(result.appointments);
        const appointment = await Doctor.updateOne(
            { _id: req.body.id }, // Filter condition
            { appointments: newAppoints } // Update operation
        );

        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({message: error});
    }
});





router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;


