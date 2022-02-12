const bodyParser = require("body-parser");
const cors = require("cors");

// parse env variables
require("dotenv").config();

const helmet = require("helmet")

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;



const mongoose = require("mongoose");


//Register schemas
require("./models/postModel");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.SERVER_URI,
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true,}).catch((err) => {
  console.error("error: " + err.stack);
});
mongoose.connection.on("open", () => {
console.log("Connected to mongoDB");
});

app.use(cors({ origin: '*' }));

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`::MongoDB:: ${req.method} : ${req.url}`)
  next()
})

//Routes
const Routes = require('./routes/routes')
Routes(app)

app.listen(port, () => {
  console.log("listening port => ", port);
});