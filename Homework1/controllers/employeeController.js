const mongoose=require('mongoose');
const Company = require('../models/company');
const Employee = require('../models/employee');
//const { createValidator, updateValidator } = require('../tools/companyValidator');

//employees_read,employee_insert,employee_edit,employee_delete,employee_insert_index,employee_moreInfo

const employees_read = async (req, res) => {
    let companyId =mongoose.Types.ObjectId(req.params.companyId);
    try {
        let company = await Company.findOne(companyId);
        let employees = company.employees;
        if (employees.length > 0) {
            res.status(200).render('employees/index', { title: 'employees', company: company, employees: employees });
        }
        else {
           //res.redirect('/:companyId/employees/insert');
           res.redirect('/');
        }
    } catch (error) {
        console.log(error);
    }
}

const employee_insert_index =async (req, res) => {
    let companyId = req.params.companyId
    try {
        let company=await Company.findOne(companyId);
        res.status(200).render('employees/insert', { title: 'add new employee',company:company });
    } catch (error) {
        console.log(error);
    }
}

// const company_moreInfo=async (req,res,next)=>{
//     let companyId = req.params.companyId;
//     try {
//         let company = await Company.findById(companyId);
//         res.status(200).render('employees',{title:'edit',company: company });
//     } catch (error) {
//         next();
//     }
// }

// const company_read = async (req, res,next) => {
//     let companyId = req.params.companyId;
//     try {
//         let company = await Company.findById(companyId);
//         res.status(200).render('edit',{title:'edit',company: company });
//     } catch (error) {
//         next();
//     }
// }

// const company_insert = async (req, res) => {
//         let result = createValidator(req.body);
//         if (result.status === false) {
//             res.status(400).json({ message: result.message });
//         }
//         else {
//             try {
//                 Company.create(req.body);
//                 //res.status(200).json({ message: 'company was added successfully' });
//                 res.status(200).redirect('/');
//             } catch (error) {
//                 res.status(500).json({message:'Internal server error'});
//             }
//         }
// }

// const company_edit = async (req, res,next) => {
//     const companyId = req.params.companyId;
//     const updates = req.body;
//     if (updateValidator(updates)) {
//         try {
//             await Company.findByIdAndUpdate(companyId, updates);
//             res.json({ message: 'company was updated successfully' });
//         } catch (error) {
//             res.status(404).json({ message: 'page was not found' });
//         }
//     }
//     else{
//         res.status(400).json({message:'data is not valid'})
//     }
// }

// const company_delete = async (req, res,next) => {
//     const companyId = req.params.companyId;
//     try {
//         await Company.findByIdAndDelete(companyId);
//         res.json({ message: 'company was deleted successfully' });
//     } catch (error) {
//         console.log(error);
//         next();
//     }
// }




module.exports = { employees_read, employee_insert_index };