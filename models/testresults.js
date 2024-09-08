const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabSchema = new Schema({
    patient_id: { type: String, required: true },
    bloodType: { type: String, required: true },
    wbcCount: { type: String, required: true },
    rbcCount: { type: String, required: true },
    cholestrol: { type: String},
    dignosisId: { type: String, required: true },
    reportPDF: { type: String} // Do in the LASSST
});

module.exports = mongoose.model('LabResult', LabSchema);