const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hospitalRoute = require('../routes/hospital');
const doctorRoute = require('../routes/doctor');
const inPatientRoute = require('../routes/in-patient');
const patientRoute = require('../routes/patient');
const authRoute = require('../routes/auth');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*', 
}));
  

const uri = "mongodb+srv://maheshwarisharman:sharman@cluster0.1u5om.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/api/hospital', hospitalRoute);
app.use('/api/doctor', doctorRoute);
app.use('/api/inpatient', inPatientRoute);
app.use('/api/patient', patientRoute);
app.use('/api/auth', authRoute);



app.get('/', (req, res) => {
    res.send('Hello, this is your message!');
});

// MongoDB connection
mongoose.connect(uri)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.listen(PORT, () => console.log("Server running on port ${PORT}"));