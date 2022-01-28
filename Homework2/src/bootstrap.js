module.exports=async()=>{
    const Company=require('./models/company');

    const errHandler=err=>{
        console.log("Error: " , err);
    }

    const company=await Company.create({
        companyName:"Maktab",
        registrationNumber:"1984981981",
        province:"Tehran",
        city:"Tehran",
        registrationDate:"02-02-2020",
        telephoneNumber:"191981651"
    }).catch(errHandler);

    const companies=await Company.findAll().catch(errHandler);
}