const mongoose = require('mongoose');
const EmployeeSchema = require('./employee');
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        required: true
    },
    telephoneNumber: {
        type: String,
        required: true
    },
    employees:[EmployeeSchema],
})

const company=mongoose.model('company',CompanySchema);

module.exports=company;