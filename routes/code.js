"use strict";
const { response } = require("express");
const express = require("express");
let router = express.Router();

router.get("/", async function (req, res, next) {
/*const customers = [
  { id: 1, username: "somebody" },
  { id: 2, username: "somebody2" }
]
res.json(customers)
});*/
if (req.query.token !== "" && req.query.request_id !== "") {
//res.send(req.query)
//const tok = json.parse(JSON.stringify(req.query))
res.send(req.query)
   
/*res.send ({
        url: req.url,
        query: req.query,
   });*/
//console.log(req.query)
//res.json(customers)
 } else {
  console.log("No auth");
  res.send("No Auth");
  next();
 }
});




/*router.post("/", function (req, res, next) {
 res.send(req.query);
  next();
});*/

module.exports = router;
