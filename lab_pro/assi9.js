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
//     let TableName = "customers";
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
      
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
})

con.connect((err)=>{
  if(err) throw err;
  console.log('connected to localhost');
  
})
var databaseName ='lab_pro';
var createdb =`CREATE DATABASE ${databaseName}`;
con.query(createdb,(err)=>{
  if(err==1) throw 'could,t create';
  console.log(databaseName+' database created');

var usedb = `USE ${databaseName}`;
con.query(usedb,(err)=>{
  if(err) throw err;
  console.log('use database '+databaseName);
  
})
var tableName ="customers";
var createTable = `CREATE TABLE ${tableName}(name varchar(25), address varchar(25))`;
con.query(createTable,(err)=>{
  if(err==1) throw 'could,t create';
  console.log(tableName+' table created');
  
})
var insertRecord = `INSERT INTO ${tableName}(name, address) VALUES ? ;`;
val1=[
  ["ram","pune"],
  ["raju","mumbai"],
  ["radha","usa"],
  ["raj","uk"],
]
con.query(insertRecord,[val1],(err,result)=>{
  if(err) throw err;
  console.log('record inserted '+ tableName);
  console.log(result);
  
  
})
var showRecord =`SELECT * FROM ${tableName}`;
con.query(showRecord,(err,result)=>{
  if(err) throw err;
  console.log('all record in '+tableName);
  
  console.log(result);
  
})
})
