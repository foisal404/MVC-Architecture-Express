
const path=require("path");
const { users } = require("../models/users.model");

exports.getUser=(req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/users.html"))
 }

 exports.saveUser=(req,res)=>{
    const name=req.body.name;
    const age = Number(req.body.age)
    const user={
        name,age
    }
    console.log(users)
    users.push(user);
    res.status(201).json({
        success:true,
        users,
    })
 }