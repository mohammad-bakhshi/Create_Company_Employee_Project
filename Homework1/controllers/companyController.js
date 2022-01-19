const Company = require('../models/company');
const { createValidator, updateValidator } = require('../tools/companyValidator');

//companies_read,company_insert,company_edit,company_delete,company_insert_index

const companies_read = async (req, res) => {
    try {
        let companies = await Company.find();
        res.status(200).render('index',{title:'companies',companies:companies});
    } catch (error) {
        console.log(error);
    }
}

const company_insert_index=(req,res)=>{
    res.status(200).render('insert',{title:'add new company'});
    //res.json({message:'works'})
}

const company_read = async (req, res,next) => {
    let id = req.params.id;
    try {
        let company = await Company.findById(id);
        res.status(200).json({ company: company });
    } catch (error) {
        next();
    }
}

const company_insert = async (req, res) => {
        let result = createValidator(req.body);
        if (result.status === false) {
            res.status(400).json({ message: result.message });
        }
        else {
            try {
                Company.create(req.body);
                //res.status(200).json({ message: 'company was added successfully' });
                res.status(200).redirect('/company');
            } catch (error) {
                res.status(500).json({message:'Internal server error'});
            }
        }
}

const company_edit = async (req, res,next) => {
    const id = req.params.id;
    const updates = req.body;
    if (updateValidator(updates)) {
        try {
            await Company.findByIdAndUpdate(id, updates);
            res.json({ message: 'company was updated successfully' });
        } catch (error) {
            res.status(404).json({ message: 'page was not found' });
        }
    }
    else{
        res.status(400).json({message:'data is not valid'})
    }
}

const company_delete = async (req, res,next) => {
    const id = req.params.id;
    try {
        await Company.findByIdAndDelete(id);
        res.json({ message: 'company was deleted successfully' });
    } catch (error) {
        console.log(error);
        next();
    }
}




module.exports = { companies_read, company_read, company_insert, company_edit, company_delete,company_insert_index };