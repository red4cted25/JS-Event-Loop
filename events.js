const {readFile, readFileSync, writeFile, writeFileSync} = require('fs')
const path = require('path')

// Problem 1
// console.log("This is synchronous")
// setTimeout(function as() {
//     console.log("This is asynchronous")
// }, 2000)
// console.log("End of script")

// Problem 2
// console.log("interval Started")
// const repeat = setInterval(function repeatRepeat() {
//     console.log("Repeating message...")
// }, 3000)
// setTimeout(function clear() {
//     clearInterval(repeat)
// }, 10000)

// Problem 3
// Since it's async, I have to add a callback function to throw errors or log data
readFile(path.join(__dirname, '/input.txt'), "utf8", (err, data) => {
    if (err) throw err
    console.log("\nAsync Data: ", data)
})

const readerSync = readFileSync(path.join(__dirname, '/input.txt'), "utf8")
console.log("\nSync Data: ", readerSync)
// Async appears last despite being logged first due to it being asynchronous

// Problem 4