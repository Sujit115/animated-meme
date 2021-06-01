// server/index.js

const express = require("express");
const path = require("path");

const webrootPath = path.join(__dirname,"wwwroot");
const distPath = path.join(webrootPath,"dist")
const indexHtmlPath = path.join(distPath,"index.html");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(webrootPath))


app.get("/", (req, res) => {
    res.sendFile(indexHtmlPath)
  });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});