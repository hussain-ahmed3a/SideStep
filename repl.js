const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
   connectionLimit : 100,
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'sidestep'   // Your database's name.
  });

  const app = express();
  app.use(express.json()); 
  app.use(bodyParser.json({type: 'application/json'}));
  app.use(express.urlencoded({extended: true}));

  // Creating a GET route that returns data from the customers table.
  app.get('/customers', function (req, res) {
      // Connecting to the database.
      connection.getConnection(function (err, connection) {
      // Executing the MySQL query (select all data from the 'users' table).
      connection.query('SELECT * FROM customer', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
  
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
      });
    });
  });

  //get store details for login
  app.get('/storelogin/:email', function (req, res) {
   console.log(req.params.email);
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM store WHERE email=?',[JSON.stringify(req.params.email)], function (error, results, fields) {
      if (error) throw error;
      res.send(results)
      console.log(results)

    });
  });
});


  //get all customers for store today
  app.get('/tickettoday/:storeid', function (req, res) {
   
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM ticket WHERE s_id=? AND ticket_type="today" AND removed=0',[req.params.storeid], function (error, results, fields) {
      if (error) throw error;
      res.send(results)

    });
  });
});

// get all customers for store another day
app.get('/ticketanotherday/:storeid', function (req, res) {
   
  connection.getConnection(function (err, connection) {

  connection.query('SELECT * FROM ticket WHERE s_id=? AND ticket_type="another day" AND removed=0',[req.params.storeid], function (error, results, fields) {
    if (error) throw error;
    res.send(results)

  });
});
});

//call update function
app.put('/callticket', function (req, res) {
  console.log(req.body);
  connection.getConnection(function (err, connection) {

  connection.query('UPDATE ticket SET called_flag=1, called_time=? WHERE ticket_number=?',[req.body.called_time,req.body.ticket_number], function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results))

  });
});
});

//remove ticket from queue
app.put('/removeticket', function (req, res) {
  console.log(req.body);
  connection.getConnection(function (err, connection) {

  connection.query('UPDATE ticket SET removed=1 WHERE ticket_number=?',[req.body.ticket_number], function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results))

  });
});
});



  

  

  
  
  // Starting our server.
  app.listen(3000, () => {
   console.log('Go to http://localhost:3000/customers so you can see the data.');
  });