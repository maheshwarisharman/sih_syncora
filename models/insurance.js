const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InsuranceSchema = new Schema({
    insurance_type: { type: String, required: true },
    company: { type: String, required: true },
    totalCover: { type: String, required: true },
    patientId: { type: String, required: true },
});

module.exports = mongoose.model('Insurance', InsuranceSchema);