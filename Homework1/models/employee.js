const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    nationalNumber: {
        type: String,
       
    },
    gender: {
        type: String,
        enum: ["male", "female"],
      
    },
    manager: {
        type: Boolean,
   
    },
    dateOfBirth: {
        type: Date,
       
    },
    age: {
        type: Number,
   
    },
    companyId:{
        ref:"company",
        type:Schema.Types.ObjectId,
        required: true
    }
});
const employee=mongoose.model('employee',EmployeeSchema);
module.exports = employee;