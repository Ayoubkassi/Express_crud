
const express = require('express');
var dt= require("./product");
const app = express();
const port = 3000;

//Get,Post,Put,Delete

app.get("/prodcut/:id", (req,res) => {
    res.json(dt.arr,find((product) =>{
        return  +req.params.id === product.id
    }))
    //res.send(req.params.id);


})
app.listen(port, ()=> console.log("Listening on port : " + port))