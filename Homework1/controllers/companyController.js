const Company = require('../models/company');

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
        Company.create(req.body);
        res.json({ message: 'company was added successfully' });
    } catch (error) {
        console.log(error);
    }
}

const company_edit = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        await Company.findByIdAndUpdate(id, updates);
        res.json({message: 'company was updated successfully'});
    } catch (error) {
        console.log(error);
    }
}

const company_delete = async (req, res) => {
    try {
        const id = req.params.id;
        await Company.findByIdAndDelete(id);
        res.json({ message: 'company was deleted successfully' });
    } catch (error) {
        console.log(error);
    }
}




module.exports = { companies_read,company_read, company_insert, company_edit, company_delete };