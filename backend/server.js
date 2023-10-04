const app = require('./app');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//config connection
dotenv.config()
const conf = process.env

//server start
const server = app.listen(conf.PORT, ()=>{
    console.log(`serving running on port:${conf.PORT}`)
})

//database connection
mongoose.connect(
  `mongodb://${conf.DB_USERNAME}:${conf.DB_PASSWORD}@ac-1rquxvy-shard-00-00.f08x12q.mongodb.net:27017,ac-1rquxvy-shard-00-01.f08x12q.mongodb.net:27017,ac-1rquxvy-shard-00-02.f08x12q.mongodb.net:27017/?ssl=true&replicaSet=atlas-fus7ej-shard-0&authSource=admin&retryWrites=true&w=majority`,
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