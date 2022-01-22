const express = require('express');
const router = express.Router();
const db=require('../config/database');
const Company=require('../models/company');

router.get('/', (req, res)=> {
Company.findAll()
.then((company)=>{
    console.log(company);
    res.sendStatus(200);
})
.catch(err=>console.error(err))
})

module.exports =router;