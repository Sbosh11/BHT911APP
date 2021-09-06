//const express = require("express");
//import express from "express";

import express from "express";
const app = express();
import path from "path";

//const app = express();
const port = process.env.PORT || 8282;

app.get("/", function (req, res, next) {
 if (req.query.token !== "") {
  next();
 } else {
  console.log("No auth");
  next();
 }
});
app.post("/", function (req, res, next) {
 //console.log(req.query);
 res.json(req.query);

 next();
});
/**Define static file */
const __dirname = path.resolve();
const buildPath = path.normalize(path.join(__dirname, "client/build"));
app.use(express.static(buildPath));

app.get("/", (req, res) => {
 res.sendFile(buildPath + "index.html");
});

/*app.get("/"),
 (req, res) => {
  res.send({
   msg: "Hello",
   user: "Sibo",
  });
 };

app.get("/hello", function (req, res, next) {
 if (req.query.token !== "") {
  next();
 } else {
  console.log("No auth");
 }
});

/*app.get("/", (req, res) => {
 //res.send("Test Page");
res.sendFile(buildPath + "index.html");
});*/

/*app.get("/", (req, res) => {
 var search = req.query.search;
 const page = req.query.page;
 const perPage = req.query.perPage;
 //res, json(search);
 console.log(search);
});*/

/*
app.get("/form", (req, res, next) => {
 if (req.query.token !== "") {
  next();
 } else {
  console.log("No auth");
 }*/

app.use(express.json());
app.use(
 express.urlencoded({
  extended: true,
 }),
);

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});
