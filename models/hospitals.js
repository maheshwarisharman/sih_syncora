const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalsSchema = new Schema({
    hospitalName: { type: String, required: true },
    address: { type: String, required: true },
    isApproved: { type: Boolean, required: true },
    phoneNumber: {type: String, required: true},
    emailAddress: {type: String, required: true},
    ambulanceHelpline: {type: String, required: true},
    doctors: {type: Array, required: true},
    medicalStaff: {type: Array},
    admin: {type: Object},
});

module.exports = mongoose.model('Hospital', HospitalsSchema);