const express = require('express');
const dbConnection=require('./dbConnection');
const path=require('path');
const Company=require('./routes/companyRouter');
//const Employee=require('./routes/employeeRouter');
const app = express();
const port=3000;

//database disconnect handle return event
dbConnection();
// mongoose.connection('error',callback)

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get('/favicon.ico', (req, res) => res.status(204));
app.use(Company);
app.use((req,res) => {
    res.status(404).render('404',{title:'not found'});
})




app.listen(port,()=>console.log(`listening on port ${port}`));