console.log(__dirname);
console.log(__filename);
setInterval(() => {
  console.log("hello");
}, 1000);

// Globals - NO WINDOW !!!
//__dirname - path to current directory
// __filename - file name
// require - function to use modules (common js)
// module - info about current module (file)
// process - info about env where the program is being executed
