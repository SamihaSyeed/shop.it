const app = require('./app');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//config connection
dotenv.config()
const conf = process.env

//server start
app.listen(conf.PORT, ()=>{
    console.log(`serving running on port:${conf.PORT}`)
})

//database connection
mongoose.connect(
    `mongodb+srv://${conf.DB_USERNAME}:${conf.DB_PASSWORD}@${conf.CLUSTER}.mongodb.net/${conf.DB_NAME}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//handle promise rejections
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`)
    console.log("Unhandled Promise rejection")

    server.close(()=>{
        process.exit(1)
    })
})

//handle uncaught exceptions
process.on("uncaughtException", err=>{
    console.log(`Error:${err.message}`)
    console.log("Uncaught Exceptions")

    process.exit(1)
})