const mongoose = require('mongoose');
const EmployeeSchema = require('./employee');
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    companyName: {
        type: String,
        required: [true,"Company's name is required."]
    },
    registrationNumber: {
        type: String,
        required: [true,"Company's Registration Number is required."],
    },   
    province: {
        type: String,
        required: [true,"Company's Province is required."]
    },
    city: {
        type: String,
        required: [true,"Company's City is required."]
    },
    registrationDate: {
        type: Date,
        required: [true,"Company's Registration Date is required."]
    },
    telephoneNumber: {
        type: String,
        required: [true,"Company's Telephone Number is required."]
    },
    
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})
CompanySchema.virtual("employees",{ 
    ref:'employee',
    foreignField:'companyId',
    localField:'_id'
})
CompanySchema.pre(/^find/,function(next)
{
    this.populate("employees");
    next();
})
const company=mongoose.model('company',CompanySchema);

module.exports=company;