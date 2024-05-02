const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config();

const connectDB = require('./db');
const routes = require("./routes/api/books");

const app = express();
console.log('port::', process.env.PORT)
const port = process.env.PORT || 8082;

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use("/api/books", routes);

// connect to database
connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
