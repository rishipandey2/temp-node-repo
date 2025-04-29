const EventEmitter = require("events");
const weather = new EventEmitter();

// Different listeners for weather events
weather.on("rain", () => {
  console.log("It's raining ☔️! Take an umbrella.");
});

weather.on("sunny", () => {
  console.log("It's sunny ☀️! Wear sunglasses.");
});

weather.on("storm", () => {
  console.log("There's a storm 🌪️! Stay indoors!");
});

// Function to randomly emit weather events
function randomWeather() {
  const events = ["rain", "sunny", "storm"];
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  weather.emit(randomEvent);
}

// Play the mini-game!
setInterval(randomWeather, 2000); // Every 2 seconds, new weather happens
