const express = require('express');
const config = require('config');
const appForEmpRouter = require('./routes/emp');

var app = express();

app.use((request,response,next)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","*");
    response.setHeader("Access-Control-Allow-Methods","*");
    next();
});


app.use(express.json());



app.use("/emp",appForEmpRouter);

var portNo = config.get("PORT");


app.listen(portNo,()=>{
    console.log("Server is listening at...." + portNo);
})