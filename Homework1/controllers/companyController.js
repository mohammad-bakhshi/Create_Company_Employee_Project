const Company = require('../models/company');
const { createValidator, updateValidator } = require('../tools/companyValidator');

//companies_read,company_insert,company_edit,company_delete

const companies_read = async (req, res) => {
    try {
        let companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.log(error);
    }
}

const company_read = async (req, res) => {
    try {
        let id = req.params.id;
        let company = await Company.findById(id);
        res.json({ company: company });
    } catch (error) {
        console.log(error);
    }
}

const company_insert = async (req, res) => {
    try {
        let result = createValidator(req.body);
        if (result.status === false) {
            res.json({ message: result.message });
        }
        else {
            Company.create(req.body);
            res.json({ message: 'company was added successfully' });
        }
    } catch (error) {
        console.log(error);
    }
}

const company_edit = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    if (updateValidator(updates)) {
        try {
            await Company.findByIdAndUpdate(id, updates);
            res.json({ message: 'company was updated successfully' });
        } catch (error) {
            res.json({ message: 'There is no company with this id' });
        }
    }
}

const company_delete = async (req, res) => {
    try {
        const id = req.params.id;
        await Company.findByIdAndDelete(id);
        res.json({ message: 'company was deleted successfully' });
    } catch (error) {
        res.json({ message: 'There is no company with this id' });
    }
}




module.exports = { companies_read, company_read, company_insert, company_edit, company_delete };