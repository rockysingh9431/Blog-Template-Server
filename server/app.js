const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!\n");
});

const PORT = 5000;
server.listen(`${PORT}/api/hello`, () => {
  console.log(`Server running at http://localhost:${PORT}/api/hello`);
});
