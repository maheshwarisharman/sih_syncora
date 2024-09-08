const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    hospitalId: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: {type: String, required: true},
    name: {type: String, required: true},
    dob: {type: String, required: true},
    age: {type: String, required: true},
    gender: {type: String, required: true},
    emergergencyContantNumber: {type: String, required: true},
    appointmentId: {type: String, required: true},
    insuranceId: {type: String},
    patientType: {type: String, required: true},
    bedNumber: {type: String},
    testId: {type: String},
    dignosisId: {type: String},
    insurance_type: {type: String},
    insurance_company: {type: String},
    total_cover: {type: String},
    goverment_scheme: {type: String},
});

module.exports = mongoose.model('Patient', PatientSchema);