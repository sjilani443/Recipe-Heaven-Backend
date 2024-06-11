const express = require('express')
const app = express()
const port = process.env.port || 5000
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json());
app.use(cors());
async function main(){
    await mongoose.connect('mongodb+srv://sjilani443:AXM8mtfeuet9NLUf@veggify.6bhnrli.mongodb.net/Veggify?retryWrites=true&w=majority&appName=Veggify');

   
}

main().then(()=>console.log("Monogdb Connected Succeesfully")).catch(err=>console.log(err));

const Itemroutes = require("./Src/Routes/itemRoute");
const Categoryroutes = require("./Src/Routes/CategoryRoute")
app.use('/api',Itemroutes)
app.use('/api',Categoryroutes)

app.get('/',(req,res)=>{
    res.send("Hello world");
})

// AXM8mtfeuet9NLUf
app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})