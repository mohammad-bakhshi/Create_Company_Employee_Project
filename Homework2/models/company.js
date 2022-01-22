const { Sequelize } = require('sequelize');
const db=require('../config/database');
const Company=db.define('company',{
    name:{
        type:Sequelize.STRING
    },
    registrationNumber:{
        type:Sequelize.STRING
    },
    province:{
        type:Sequelize.STRING
    },
    city:{
        type:Sequelize.STRING
    },
    registrationDate:{
        type:Sequelize.DATE
    },
    telephoneNumber:{
        type:Sequelize.STRING
    }
})

module.exports=Company;