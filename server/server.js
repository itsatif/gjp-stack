const express = require("express");
let app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//for getting json files from post
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/login",(req,res) => {
    console.log(req.body);
    res.json({
        msg:"Data Inserted successfully",
        username:req.body.username,
        password:req.body.password,
    });
});

app.listen(4000,()=>{
    console.log("Success");
})