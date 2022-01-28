const express = require('express');
const Employee=require('../models/employee')
const router=express.Router({mergeParams: true});
const employeeController=require('../controllers/employeeController');

//read employees
router.get('/',employeeController.employees_read);

//insert page
router.get('/insert',employeeController.employee_insert_index);

//insert an employee
router.post('/employee',async (req,res)=>{
    const employee = await Employee.create(req.body);
    res.send('ok');
});

// // //edit an employee
// // router.post('/update');

// // //delete an employee
// // router.delete('/delete');



module.exports=router;