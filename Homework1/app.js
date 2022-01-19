const express = require('express');
const dbConnection=require('./dbConnection');
const Company=require('./routes/companyRouter');
const Employee=require('./routes/employeeRouter');
const app = express();
const port=3000;

//database disconnect handle return event
dbConnection();
// mongoose.connection('error',callback)

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use('/company',Company);
app.use('/employee',Employee);
app.use((req,res) => {
    res.status(404).json({message:'page not found'});
})




app.listen(port,()=>console.log(`listening on port ${port}`));