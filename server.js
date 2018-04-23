const path = require("path");
const express = require("express");

const DIST_DIR = path.join(__dirname, "dist");
const PORT = 4500;
const app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  if (req.url.includes('.css') || req.url.includes('.js') ){
    const url = req.url.split('?')[0];
    res.sendFile(path.join(__dirname, url));
  }
  else{
    res.sendFile(path.join(DIST_DIR, "index.html"));
  }
});

app.listen(PORT, ()=>{
  console.log(`App is running is running on port ${PORT}`)
});