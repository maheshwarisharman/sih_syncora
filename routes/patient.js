const express = require('express');
const Patient = require('../models/patient.js');


const router = express.Router();

//Add A Patient to DB
router.post('/add', async (req, res) => {

    let randomNum = Math.floor(Math.random() * 100001); // Generates a number between 0 and 100

    try {
      const patient = new Patient({ 
        hospitalId: req.body.hospitalId,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        name: req.body.name,
        dob: req.body.dob,
        age: req.body.age,
        gender: req.body.gender,
        emergergencyContantNumber: req.body.emergergencyContantNumber,
        appointmentId: randomNum,
        patientType: req.body.patientType,
        bedNumber: req.body.bedNumber,
       });
      await patient.save();
      res.status(201).json(patient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

});

//Update Dianosis id
router.post('/diagnosis', async (req,res) => {

    try {
        // Find and update one document
        const patient = await Patient.updateOne(
            { _id: req.body.id }, // Filter condition
            { dignosisId: req.body.dignosisId } // Update operation
        );

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({message: error});
    }
});


//Update Test id
router.post('/test', async (req,res) => {

    try {
        // Find and update one document
        const patient = await Patient.updateOne(
            { _id: req.body.id }, // Filter condition
            { testId: req.body.testId } // Update operation
        );

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({message: error});
    }
});


//Update Bed Number
router.post('/bednumber', async (req,res) => {

    try {
        // Find and update one document
        const patient = await Patient.updateOne(
            { _id: req.body.id }, // Filter condition
            { bedNumber: req.body.bedNumber } // Update operation
        );

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({message: error});
    }
});



//Update insuranceId of Patient
router.post('/insurance', async (req,res) => {

    try {
        // Find and update one document
        const patient = await Patient.updateOne(
            { _id: req.body.id }, // Filter condition
            { insurance_type: req.body.insurance_type,
                insurance_company: req.body.insurance_company,
                total_cover: req.body.total_cover,
                goverment_scheme: req.body.goverment_scheme
            } // Update operation
        );
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({message: error});
    }
});





router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;


