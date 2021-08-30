//const express = require("express");
import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 8282;
/**Define static file */
const __dirname = path.resolve();
const buildPath = path.join(__dirname, "client/build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
 res.sendFile(buildPath + "index.html");
});

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});
