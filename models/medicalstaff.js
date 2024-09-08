const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dob: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    staff_type: { type: String, required: true },
    hospital_id: { type: String, required: true },
});

module.exports = mongoose.model('Staff', StaffSchema);