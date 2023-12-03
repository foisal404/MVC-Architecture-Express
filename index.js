 const express =require("express");
 const app= express();
 const PORT =3000;

const userRouter =require('./routes/users.route')
const productRouter =require('./routes/products.route')
app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use(productRouter);

 app.use((req,res,next)=>{
    res.status(404).json({
        message:"resourse not found",
    })
 })

 app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
 })