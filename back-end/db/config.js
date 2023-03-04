const mongoose=require('mongoose');
mongoose.set('strictQuery',true);
const DB="mongodb+srv://Nishant:Nishantdoble@cluster0.ywsbsqj.mongodb.net/Dashboard?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>console.log("data base connected")).
catch((error)=>console.log("error"+error.message));