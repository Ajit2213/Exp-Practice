const express=require("express");
const app=express();

const port=3000;
const path=require("path")

app.set("views", path.join(__dirname,"/views"))

app.set("view engine" ,"ejs");



app.use(express.static(path.join(__dirname,"public")));

app.listen(port,(req,res)=>{
    console.log("its listning");
})

app.get("/",(req,res)=>{
    res.send("Its amazing");
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let instadata=require("./data.json");
    let data=instadata[username];
    console.log(data);
    //error handling like feel in ejs
    if(data){
        res.render("insta.ejs",{data})
    }else{
        res.render("error.ejs")
    }
})

