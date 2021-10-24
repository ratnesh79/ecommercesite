import express from "express";
import Data from './product_list.js'

const app = express();

app.get("/",(req,res)=>{
    res.send("connected")
})
app.get("/api/products",(req,res)=>{
    res.send(Data)

})

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})