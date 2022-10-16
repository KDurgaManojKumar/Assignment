const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/Posts");
const path=require("path");



dotenv.config();

app.use(express.json());


mongoose.connect(process.env.Mongo_URL,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Conected to mongo DB");
    }
});

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);

app.listen("3000",()=>{
    console.log("Server sucessfully ported on port 3000");
});