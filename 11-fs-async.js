const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");



/*1. Callback

Before Promises existed, people used callbacks to handle asynchronous operations.

Example of callback:

function sayHello(callback) {
  setTimeout(() => {
    callback("Hello (from callback)");
  }, 1000);
}

sayHello((message) => {
  console.log(message);
});

    sayHello waits 1 second, then calls the callback.

    Problem? ➔ If you have many async operations, callbacks get nested and messy (called "callback hell"). */


    /*2. Promise

To solve callback hell, Promises were introduced.

Same logic using a Promise:

function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello (from promise)");
    }, 1000);
  });
}

sayHello().then((message) => {
  console.log(message);
});

    Now sayHello returns a Promise.

    .then() is used to handle the result.

    Promises made it easier to chain things */

    /*3. Async/Await

Async/Await was created to make Promises look even simpler — like normal, synchronous code.

Same logic using async/await:

async function sayHello() {
  return "Hello (from async function)";
}

async function main() {
  const message = await sayHello();
  console.log(message);
}

main();

    sayHello is automatically returning a Promise.

    await pauses until the Promise is resolved.

    Code looks clean and easy to read, no .then(), no nested callbacks.

💬 Summary
Old Way	Problem
Callback	Ugly, nested, hard to manage
Promise	Better, but .then().then() chains
Async/Await	Best — makes async code readable like sync code */

/*Term | Meaning
Callback | "When you're done, call this function."
Promise | "I promise to give you a result later."
Async/Await | "Wait here until the promise is ready." */

/*So to your exact point:

    Callback → old style

    Promise → better style

    Async/Await → best style, but built on top of Promises. */