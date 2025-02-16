console.log("Hello Bala")
console.log(global) // It is the object in the Node.js and in JS the object is named as "Window". "Global " is small when compared to Window"

var os = require("os")
var path = require("path")

console.log(os.version())
console.log(os.homedir())
console.log(os.type())
console.log(__dirname)
console.log(__filename)

console.log("-----");
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log("-----")
console.log(path.parse(__filename)) // Give all the object details of the file. Commonly used.

console.log("------------------------------------------------")

var math = require('./math.js') // Also can be done as destructures like "const {add, mul, sub, div} = require('./math)"

console.log(math.add(3, 3)) //Then the call be like "add(3,3)"
console.log(math.sub(3, 3))
console.log(math.mul(3, 3))
console.log(math.div(3, 3))


// Instead of .js if we put the .mjs the ES6 can be used efficiently like the "import os from 'os' " this explicitly imports the ES6 into the Javascript


console.log("------------------------ FILE SYSTEM --------------------------")