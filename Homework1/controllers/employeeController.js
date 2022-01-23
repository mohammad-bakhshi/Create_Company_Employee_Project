const mongoose = require('mongoose');
const Company = require('../models/company');
// //const { createValidator, updateValidator } = require('../tools/companyValidator');

// //employees_read,employee_insert,employee_edit,employee_delete,employee_insert_index,employee_moreInfo

const employees_read = async (req, res) => {
    let companyId = req.params.companyId;
    try {
        let company = await Company.findById(companyId);
        let employees = company.employees;
        if (employees.length > 0) {
            res.status(200).render('employee/index', { title: 'employees', company: company, employees: employees });
        }
        else {
            res.status(200).render('employee/empty', { title: 'employees', company: company });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const employee_insert_index = async (req, res) => {
    let companyId = req.params.companyId;
    try {
        let company = await Company.findById(companyId);
        company.employees.push(req.body);
        res.status(200).render('employee/insert', { title: 'add new employee',company:company});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    res.status(200).render('employee/insert', { title: 'add new employee' });
}

const employee_insert = async (req, res) => {
    let companyId = req.params.companyId;
    try {
        let company = await Company.findById(companyId);
        company.employees.push(req.body);
        res.status(200).json({ message: 'company was added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

// const employee_delete = async (req, res,next) => {
//     const companyId = req.params.companyId;
//     const employeeId=req.params.employeeId;
//     try {
//         let company=await Company.findById(companyId);
//         await company.employees.findByIdAndDelete(employeeId);
//         res.json({ message: 'company was deleted successfully' });
//     } catch (error) {
//         console.log(error);
//         next();
//     }
// }


// // const company_read = async (req, res,next) => {
// //     let companyId = req.params.companyId;
// //     try {
// //         let company = await Company.findById(companyId);
// //         res.status(200).render('edit',{title:'edit',company: company });
// //     } catch (error) {
// //         next();
// //     }
// // }


// // const company_edit = async (req, res,next) => {
// //     const companyId = req.params.companyId;
// //     const updates = req.body;
// //     if (updateValidator(updates)) {
// //         try {
// //             await Company.findByIdAndUpdate(companyId, updates);
// //             res.json({ message: 'company was updated successfully' });
// //         } catch (error) {
// //             res.status(404).json({ message: 'page was not found' });
// //         }
// //     }
// //     else{
// //         res.status(400).json({message:'data is not valid'})
// //     }
// // }






module.exports = { employees_read, employee_insert_index, employee_insert };