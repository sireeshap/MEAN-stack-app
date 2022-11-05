var  mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Reesha_943354",
    database:"appointmentSystemDB"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("My SQL connected, welcome to appointment system")

});

module.exports= connection;