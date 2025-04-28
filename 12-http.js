const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to the about page");
  }
  res.end(
    `
  <h1>Oops!</h1>
  <p>We can not seem to find the page you are looking for </p>
  <a href = "/">back home</a>
  `
  );
});

server.listen(5000,()=>{
  console.log('Server Listening on port 5000...');
});
