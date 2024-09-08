const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiagnosisSchema = new Schema({
    patient_id: { type: String, required: true },
    diagnosis_type: {type: String, required: true},
    doctor_id: {type: String, required: true},
    result: {type: String}
});

module.exports = mongoose.model('Diagnosis', DiagnosisSchema);