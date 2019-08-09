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

$(".submit").on("click", function (event) {
    event.preventDefault();
    
    $.post("/api/tables", newReservation, function (data) {
        if (data) {
            alert("You've been booked!");
        } else {
            alert("Sorry were pretty busy!");
        };

        $("reserve-id").val("");
        $("reserve-name").val("");
        $("reserve-email").val("");
        $("reserve-phone").val("");
    })

    let newReservation = {
        customerID: $("#reserve-id").val.trim,
        customerName: $("#reserve-name").val.trim,
        customerEmail: $("#reserve-email").val.trim,
        customerPhone: $("#reserve-phone").val.trim
    }
});