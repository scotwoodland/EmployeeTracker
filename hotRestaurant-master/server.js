// dependencies

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  (DATA)
// =============================================================

var viewTable = 
[
  {
  customerName: "Seth Martineau",
  phoneNumber: "555-555-1234",
  customerEmail: "sm.com",
  customerID: "greatandsecret"
  },
  {
  customerName: "Zachary Creek ",
  phoneNumber: "123-456-7899",
  customerEmail: "zc.com",
  customerID: "Awesome"
  },
  {
    customerName: "Tony Rivas ",
    phoneNumber: "123-456-7899",
    customerEmail: "tr.com",
    customerID: "Great"
    }
];


console.log(viewTable);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


//Listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  
});
