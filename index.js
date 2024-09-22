// requiring express
const express = require("express");
const app = express();
const port = 8000;
// requiring mongodb
const {connecttomongodb} = require("./connect.js");
connecttomongodb(	'mongodb://127.0.0.1:27017/short-id').then(
console.log('mongodb connected')



);
// middleware to parse raw data into json
app.use(express.json());
//requiring routes
const urlroute = require('./routes/route.js');
// posting url and creating a shortid
app.use("/",urlroute);


// listening routes
app.listen(8000,()=>console.log(`server started at port :${port}`)
)

