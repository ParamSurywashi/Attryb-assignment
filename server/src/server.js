const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./Router/userRouter');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


main().catch(err => console.log(err));

async function main() {
mongoose.connect('mongodb+srv://Parmanand:Param123@cluster0.p5aqwmv.mongodb.net/BuyCars?retryWrites=true&w=majority');
console.log("Database Connected");
}

app.use('/', userRouter.Router);

//https://attryb-assignment.onrender.com

app.listen(8080,()=>{
    console.log("Port Listen 8080");
})