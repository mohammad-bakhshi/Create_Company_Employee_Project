const mongoose=require("mongoose");

const dbConnection=async ()=>
{
    const mongoURI='mongodb://localhost:27017/company';
    try {
        await mongoose.connect(mongoURI);
        console.log("Database Connection Established...!");
      } catch (error) {
        console.log("Error: Database connection can not be established...!\n", error.message);
      }
}

module.exports=dbConnection;