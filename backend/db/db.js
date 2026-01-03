const mongoose=require('mongoose');


const db=async()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_CONN);
        console.log("Connected to the database");
    }catch(err){
        console.log("Error connecting the database");
    }
}
module.exports=db