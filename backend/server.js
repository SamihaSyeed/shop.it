const app = require('./app');
require('./config/config.env')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const username = "syeedsamiha";
const password = "FBs83SQfFg2DJ2Xb";
const cluster = "cluster0.f08x12q";
const dbname = "shopit";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

dotenv.config({path:`${__dirname}/config/config.env`})

console.log(__dirname )
app.listen(process.env.PORT, ()=>{
    console.log(`serving running on port:${process.env.PORT}`)
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});