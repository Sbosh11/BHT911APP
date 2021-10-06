const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8282;
//const code = require("./routes/code.js");
const path = require("path");
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//app.use("/code", code);
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use('/admin', function (req, res, next) { // GET 'http://www.example.com/admin/new?a=b'
  console.dir(req.originalUrl) // '/admin/new?a=b' (WARNING: beware query string)
  console.dir(req.baseUrl) // '/admin'
  console.dir(req.path) // '/new'
  console.dir(req.baseUrl + req.path) // '/admin/new' (full path without query string)
  next()
});



app.get('/', (req, res, next) => {
   let myc = req.query
   console.log(myc)
const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const fullUrl = `${protocol}://${host}:${port}${url}`
    const responseString = `Full URL is: ${fullUrl}`;
    console.log(responseString)
res.cookie('test', JSON.stringify(myc), {
    maxAge: 86400 * 1000, // 24 hours
    httpOnly: false, // http only, prevents JavaScript cookie access
    secure: false // cookie must be sent over https / ssl
});
console.dir(req.cookies.test)
console.log(req.cookies.test)
next()
})

const buildPath = path.normalize(path.join(__dirname, "client/build"));
app.use(express.static(buildPath));
app.get("/", (req, res) => {
 res.sendFile(buildPath + "index.html");
});


app.get("/", function (req, res, next) {
  res.json(req.query)
 console.log(req.body)
 console.log(req.query)
 next()
 });
 /*if (req.query.token !== "" && req.query.request_id) {
 res.json(req.query)
 console.log(req.body)


next();
 } else {
  console.log("No auth");
  res.send("No Auth");
  next();
 }*/

/*
app.post('/', (req, res,next) => {
console.log(req.body)
res.redirect('/accept')
})
*/

app.get("/decline", (req, res) => {
 res.send("Declined");
});

app.post("/decline", (req, res, next) => {
console.log(res.json(req.body))
next()
});


app.post("/accept", (req, res,next) => {
if(req.body.Reason =="Success") {
  console.log("Payment Successful")
}

res.redirect('/')

next()
});
//success=true <-  for successful payment otherwise false
//subscriptionId <- if you not using family subscriptions you can leave this blank
//token="some string"

app.post("/redirect", (req, res,next) => {
next()
});


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});