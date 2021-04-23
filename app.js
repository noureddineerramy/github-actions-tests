var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 7000


var con = mysql.createConnection({
  host: "app-mysql",
  user: "root",
  password: "root"
});





app.get('/', (req, res) => {
  con.connect(function(err) {
    if (err){
      console.log("----------------Not Connected!----------------",err);
      
    }else{
      console.log("----------------Connected!----------------");
    }
    
  });
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
