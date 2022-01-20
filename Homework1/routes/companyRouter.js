const express = require('express');
const router = express.Router();
const employeeRouter=require('./employeeRouter');
const companyController = require('../controllers/companyController');


//read companies
router.get('/', companyController.companies_read);

//read a company
router.get('/:companyId', companyController.company_read)

//insert a company
router.post('/',companyController.company_insert);

//edit a company
router.put('/:companyId', companyController.company_edit);

//delete a company
router.delete('/:companyId', companyController.company_delete);

//read add company page
router.get('/insert',companyController.company_insert_index);

//get employees
router.use('/:companyId/employees',employeeRouter)











module.exports = router;