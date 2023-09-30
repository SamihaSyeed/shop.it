const express = require("express");
const app = express();
const errorMiddleWare = require('./middleware/error')

app.use(express.json());
const product = require("./routes/productRoute");
app.use("/api/v1", product)

app.use(errorMiddleWare)







module.exports = app