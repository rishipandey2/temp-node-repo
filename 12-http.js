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



/*Notes
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
*/