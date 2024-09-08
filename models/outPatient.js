const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outPatientSchema = new Schema({
    patientId: {type: String, required: true},
    date: {type: String, required: true},
    doctorPhone: {type: String, required: true},
    timeTo: {type: String, required: true},
    timeFrom: {type: String, required: true},
    paitent_type: {type:String, required: true}
});

module.exports = mongoose.model('outPatient', outPatientSchema);