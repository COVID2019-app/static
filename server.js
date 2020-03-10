var express     = require("express"),
fs              = require('fs'),
readline        = require('readline'),
{google}        = require('googleapis'),
request         = require('request'),
server             = express();
server.set("view engine", "ejs");
const port = process.env.PORT || 5000
server.use(express.static('public'))
server.get('/', (req, res) => {
    res.status(200).send('LIVE.html')
  })
  server.listen(port,()=>{
    console.log(`Up on port ${por}`)
})