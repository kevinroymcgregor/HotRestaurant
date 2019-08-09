var mysql = require("mysql");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

function returnReservations() {
  const query = `SELECT ID, uName, phone, email, waitlist FROM reservation`
  connection.query(query, function (err, res) {
    if (err) throw err;
    return (res);
  })
};

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// app.post("/api/tables", newReservation, function (data) {
//   if (data) {
//     alert("You've been booked!");
//   } else {
//     alert("Sorry were pretty busy!");
//   };

//   $("reserve-id").val("");
//   $("reserve-name").val("");
//   $("reserve-email").val("");
//   $("reserve-phone").val("");

// let newReservation = {
//   customerID: $("#reserve-id").val.trim,
//   customerName: $("#reserve-name").val.trim,
//   customerEmail: $("#reserve-email").val.trim,
//   customerPhone: $("#reserve-phone").val.trim
// }

// const query = "INSERT INTO reservations ?"
// connection.query(query, [{ ID: newReservation.customerID }, { uName: newReservation.customerName },
// { email: newReservation.customerEmail }, { phone: newReservation.customerPhone }, { waitlist: 0 }]);
// });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});