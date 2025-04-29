// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "john", 34);


/*In Node.js, an EventEmitter is a core module that allows you to create, listen for, and respond to events in your application — just like how a button on a webpage triggers a click event.

It follows the Observer pattern, where an object (the EventEmitter) "emits" named events, and listeners (callback functions) are attached to respond to those events.

Think of it like this:

    The EventEmitter announces ("emits") that something happened.

    Anyone who is listening for that announcement reacts.

Basic Example

const EventEmitter = require('events');

// Create an instance
const myEmitter = new EventEmitter();

// Add a listener
myEmitter.on('greet', () => {
  console.log('Hello there!');
});

// Emit an event
myEmitter.emit('greet');

Output:

Hello there!

Breakdown:

    myEmitter.on('greet', callback) → listens for the 'greet' event.

    myEmitter.emit('greet') → fires the 'greet' event, triggering the listener.

Important Points

    You can attach multiple listeners to the same event.

    Order matters: listeners are called in the order they are registered.

    You can use methods like .once() to listen only one time.

    It's heavily used inside Node.js itself — for example, the http server emits request, close, etc.

A more real-world example (Server):

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

// server is an EventEmitter!
server.on('request', (req, res) => {
  console.log(`Received request for ${req.url}`);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

Here, the server emits a 'request' event every time it gets an HTTP request, and your listener responds.
Common Methods:
Method	Purpose
.on(event, listener)	Register a listener
.emit(event, [...args])	Emit an event
.once(event, listener)	Listen once
.off(event, listener)	Remove a listener (or .removeListener())
.removeAllListeners([event])	Remove all listeners for an event

Would you like me to also show a visual diagram of how EventEmitter works internally? 🚀
(It's super helpful for really "getting" it.) */



/*🧠 What does "Emitter" actually mean?

The word Emitter comes from "emit" which means to send out, to release, or to throw something out.

For example:

    The sun emits light.

    A speaker emits sound.

In Node.js:

    Emitter = Something that sends out events. */