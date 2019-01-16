const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jecode4wcs',
  database : 'Wilders'
});
module.exports  =  connection;