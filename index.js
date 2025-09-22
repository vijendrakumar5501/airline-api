const express=require('express')
const {PORT} =require("./src/config")

const app=express();


app.listen(PORT,()=>{
    console.log('srver started')
})
