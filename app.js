var mysql = require('mysql');
const express = require('express')
require('dotenv').config()

const app = express()
const port = 7000




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(process.env.DB_HOST);
})
