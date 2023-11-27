// var http = require('http'); 
// var mysql = require('mysql');

// var server = http.createServer(function (req, res) {  

// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write("<h1 style='background-color:green'>Upload your file</h1>");

// res.end();

// });

// server.listen(8002); 

// console.log('Node.js web server at port 8002 is running..')


// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",

//     user: "root",
  
//     //password: "", /*pc xampp database or localhost*/
//    //password: "Gaurav@123", /* pc commond line mysql or localhost*/
//    password: "raj@123", /* mobile xampp or local host*/

// });

// // use the  query to connect a localhost
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to localhost!");
 
//   });


//  // use the query to create a Database.
//   let databaseName = "lab_pro";
  
//   let createQuery = `CREATE DATABASE ${databaseName}`;

 
//   con.query(createQuery, (err) => {
//       if(err==1) throw  "Couldn't create";

//       console.log(databaseName+" Database Created Successfully !");
//   // use the query to Use a Database.
//       let useQuery = `USE ${databaseName}`;
//       con.query(useQuery, (error) => {
//           if(error) throw error;

//           console.log("Using Database"+databaseName);
//         })
//   // Create a new Table
//     let TableName = "student";
//     let table_query = `CREATE TABLE ${TableName} (name VARCHAR(255), address VARCHAR(255))`;
  
//     con.query(table_query, (err) => {
//       if(err==1) throw "Couldn't create";
//       console.log(TableName+" Table created");
//     });

// //Insert Data in Table

//   let Insert_query = `INSERT INTO ${TableName} (name, address) VALUES ?;`;
  
// // multiple Values to be inserted
//     let values = [
//         ['Amit', 'Yellow Park'],
//         ['Rishi', 'Park 38'],
//         ['Akash', 'Central st 954'],
//         ['Pratik', 'Road 989'],
//         ['Mangesh', 'Sideway']
//     ];
  
//   // Executing the query show row are inserted in the table
//     con.query(Insert_query, [values], (err) => {
    
//         if (err==1) throw "Couldn't create";
//         console.log("All Rows Inserted");
//     });

// //select query to show table data
//     let show_student = `SELECT * FROM ${TableName}`
//     con.query(show_student, function (err, result, fields) {

//         if (err) throw err;
    
//         console.log(result);
    
//       });
//   });

 const { query } = require('express');
var mysql = require('mysql');

 var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
 })

 con.connect(function(err){
  if (err) throw err; 
  console.log('connected to localhost');
  
 })
 var databaseName ='lab_pro'
 var createdb = `CREATE DATABASE ${databaseName}`;
 con.query(createdb,(err)=>{
  if(err==1) throw "couldn't create ";
  console.log(databaseName+' database created');
  
  var usedb = `USE ${databaseName}`;
  con.query(usedb,(err)=>{
    if(err) throw err;
    console.log('using database '+databaseName);
    
  })
  var TableName ="student"; 
  var createTable =`CREATE TABLE ${TableName}(name varchar(25), address varchar(25))`;
  con.query(createTable,(err)=>{
    if(err==1) throw "couldn't create";
    console.log(TableName+' table created');
    
  })
  var insertRecord = `INSERT INTO ${TableName}(name, address) VALUES ?`;
  var val1 =[
    ["ram","pune"],
    ["raj","uk"],
    ["radha","mumbai"],
    ["raju","usa"],
  ]

  con.query(insertRecord,[val1],(err,rows)=>{
    if(err) throw err;
    console.log(TableName+' record inserted '+rows.affectedRows);

    
    
  })
  var showRecord = `SELECT * FROM ${TableName}`
  con.query(showRecord,(err,result)=>{
    if(err) throw err;
    console.log('all records in table');
    console.log(result);
    
    
  })
 })