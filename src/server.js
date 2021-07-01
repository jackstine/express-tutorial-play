const express = require("express");
const http = require("http");
const cors = require("cors");

process.on("unhandledRejection", function (err) {
  console.error(err);
});

const app = express();
app.use(cors());
app.use(express.json())

app.get('/users', function (req, res) {
  res.send([
    {
      name: 'mike'
    },
    {
      name: 'george'
    },
    {
      name: 'Suzanne'
    },
    {
      name: 'Samantha'
    }
  ])
})

app.post('/users', function (req, res) {
  let body = req.body
  console.log(body)
  res.send(body)
})

const httpServer = http.createServer(app);

const SERVER_PORT = 7078;

httpServer.listen(SERVER_PORT, () => {
  console.log(`Example app listening at http://localhost:${SERVER_PORT}`);
});
