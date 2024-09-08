const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inPatientSchema = new Schema({
    patientId: {type: String, required: true},
    roomNumber: {type: String, required: true},
    roomType: {type: String, required: true},
    date_adm: {type: String, required: true},
    date_dis: {type: String, required: true},
});

module.exports = mongoose.model('inPatient', inPatientSchema);