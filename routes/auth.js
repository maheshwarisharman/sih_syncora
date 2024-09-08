const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const user = new User({ 
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
     });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


  router.get('/deleteall', async (req, res) => {
  
    try {
        const users = await User.deleteMany({});
        res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber, password: req.body.password });
    if (!user) return res.status(400).json({ message: 'User not found' });
    else res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


