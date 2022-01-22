const express=require('express');
const app = express();
const db=require('./config/database');
const companyRouter=require('./routes/companyRouter');

//test connection
db.authenticate()
.then(()=>console.log('connected to the database'))
.catch(err => console.log(err))

app.use('/company',companyRouter);

const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is listening on ${PORT}`));