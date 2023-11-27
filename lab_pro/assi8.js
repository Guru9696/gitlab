var http = require("http");
var mysql = require("mysql");

var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
});

con.connect((err)=>{

if(err) throw err;
console.log('connected to localhost');
});

var databaseName = "lab_pro";
var createdb = `CREATE DATABASE ${databaseName}`;

con.query(createdb,(err,result)=>{
if(err==1) throw "could't create";
console.log(databaseName+' database created successfully ');

var usedb = `USE  ${databaseName}`;
con.query(usedb,(err)=>{
    if(err) throw err;
    console.log('use database '+databaseName);
    
})

var tableName = "student";
var createTable = `CREATE TABLE ${tableName}(name varchar(25), address varchar(25))`;

con.query(createTable,(err,result)=>{
    if(err==1) throw 'couldt create';
    console.log(tableName+' table created sucessfully');
    
})

})

