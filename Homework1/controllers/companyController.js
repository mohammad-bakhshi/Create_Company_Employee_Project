const Company = require('../models/company');
const { createValidator, updateValidator } = require('../tools/companyValidator');


// //companies_read,company_insert,company_edit,company_delete,company_insert_index,company_moreInfo

const companies_read = async (req, res,next) => {
    try {
        let companies = await Company.find();
        //res.status(200).render('company/index', { title: 'companies', companies: companies });
        res.json({ companies: companies});
    } catch (error) {
        console.log(error);
        //res.status(500).json({ message: 'Internal server error' });
        next(error);
    }
}

const company_insert_index = (req, res) => {
    res.status(200).render('company/insert', { title: 'add new company' });
}

const company_insert = async (req, res) => {
    let result = createValidator(req.body);
    if (result.status === false) {
        res.status(400).json({ message: result.message });
    }
    else {
        try {
           await Company.create(req.body);
            res.status(200).json({ message: 'company was added successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

const company_delete = async (req, res) => {
    const companyId = req.params.companyId;
    try {
        await Company.findByIdAndDelete(companyId);
        res.status(200).json({ message: 'company was deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const company_read = async (req, res) => {
    const companyId = req.params.companyId
    try {
        let company = await Company.findById(companyId);
        res.status(200).render('company/edit', { title: 'edit', company: company });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const company_edit = async (req, res) => {
    const companyId = req.params.companyId;
    const updates = req.body;
    if (updateValidator(updates)) {
        try {
            await Company.findByIdAndUpdate(companyId, updates);
            res.status(200).json({message: 'company was updated successfully' });
        } catch (error) {
            console.log(error);
            res.status(404).json({message: 'page was not found' });
        }
    }
    else {
        res.status(400).json({ updated: false, message: 'data is not valid' })
    }
}





module.exports = { companies_read, company_insert_index, company_insert, company_delete, company_read, company_edit };