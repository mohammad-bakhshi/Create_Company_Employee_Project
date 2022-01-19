const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');


//read companies
router.get('/', companyController.companies_read);

//read a company
router.get('/:id', companyController.company_read)

//insert a company
router.post('/',companyController.company_insert);

//edit a company
router.put('/:id', companyController.company_edit);

//delete a company
router.delete('/:id', companyController.company_delete);

router.get('/insert',companyController.company_insert_index);











module.exports = router;