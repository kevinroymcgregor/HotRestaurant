var mysql = require("mysql");
var express = require("express");
var path = require("path");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "hotrestaurant"
  });

  function returnReservations(){
      const query = `SELECT ID, uName, phone, email, waitlist FROM reservation`
      connection.query(query, function(err, res){
        if(err) throw err;  
        return (res);
      })
  };