console.log("Hello Bala")
console.log(global)

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
