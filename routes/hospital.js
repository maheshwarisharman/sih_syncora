const express = require('express');
const Hospital = require('../models/hospitals.js');
const Item = require('../models/inventory.js');


const router = express.Router();

//register Hospital
router.post('/register', async (req, res) => {
  
    try {
      const hospital = new Hospital({ 
        hospitalName: req.body.hospitalName,
        address: req.body.address,
        isApproved: false,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        ambulanceHelpline: req.body.ambulanceHelpline,
       });
      await hospital.save();
      res.status(201).json({ message: 'Hospital registered successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

});

router.post('/additem', async (req, res) => {
  
    try {
      const item = new Item({ 
        itemName: req.body.itemName,
        stock: req.body.stock,
        itemType: req.body.itemType,
        price: req.body.price,
        hospital_id: req.body.hospital_id
       });
      await item.save();
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

});


router.post('/updateitem', async (req, res) => {
  
    try {
        // Find and update one document
        const result = await Item.updateOne(
            { _id: req.body.id }, // Filter condition
            { stock: req.body.stock } // Update operation
        );
        res.status(200).json({message: "Stock Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: error});
    }

});


router.post('/approve', async (req,res) => {
    try {
        // Find and update one document
        const result = await Hospital.updateOne(
            { _id: req.body.id }, // Filter condition
            { isApproved: true } // Update operation
        );

        res.status(200).json({message: "Hospital Approved Successfully"});
    } catch (error) {
        res.status(500).json({message: error});
    }
});


//Update Doctor Names:
router.post('/adddoctors', async (req,res) => {

    let str = req.body.doctors;

    // Replace single quotes with double quotes and object keys with double quotes
    let formattedStr = str.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');
    
    // Parse the formatted string into a JavaScript array
    let arr = JSON.parse(formattedStr);

    try {
        // Find and update one document
        const result = await Hospital.updateOne(
            { _id: req.body.id }, // Filter condition
            { doctors: (arr) } // Update operation
        );

        res.status(200).json({message: result});
    } catch (error) {
        res.status(500).json({message: error});
    }
});




//Update Medical Staff:
router.post('/addstaff', async (req,res) => {

    let str = req.body.medicalStaff;

    // Replace single quotes with double quotes and object keys with double quotes
    let formattedStr = str.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');
    
    // Parse the formatted string into a JavaScript array
    let arr = JSON.parse(formattedStr);

    try {
        // Find and update one document
        const result = await Hospital.updateOne(
            { _id: req.body.id }, // Filter condition
            { medicalStaff: (arr) } // Update operation
        );

        res.status(200).json({message: result});
    } catch (error) {
        res.status(500).json({message: error});
    }
});



router.get('/allitems', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;


