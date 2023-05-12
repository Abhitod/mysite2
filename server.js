import express from "express"
let app=express()

app.get("/",(req,res)=>{
    res.send("running on server")
})

app.listen(1760,()=>{
    console.log("running on port 1760")
})