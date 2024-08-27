const {readFile, readFileSync, writeFile, writeFileSync} = require('fs')
const path = require('path')

// ------- Comment each problem out in order to test each one individually ---------

// Problem 1
console.log("This is synchronous")
setTimeout(function as() {
    console.log("This is asynchronous")
}, 2000)
console.log("End of script")

// Problem 2
console.log("interval Started")
const repeat = setInterval(function repeatRepeat() {
    console.log("Repeating message...")
}, 3000)
setTimeout(function clear() {
    clearInterval(repeat)
}, 10000)

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
const syncFile = readFileSync(path.join(__dirname, '/data.txt'), "utf8")
console.log("Sync Macbeth: ", syncFile)

setTimeout(function asyncData() {
    setTimeout(() => {
        console.log("Starting async operation...")
    }, 2000)
    readFile(path.join(__dirname, '/data.txt'), "utf8", (err, data) => {
        if (err) throw err
        console.log("\nAsync Macbeth: ", data)
    })
})
console.log("Script Complete")

// Problem 5
let counter = 0;
console.log("Countdown initiated...")
// Extension
for(let i = 0; i < 1000000; i+=1.001) {
    i--
}
const countdownInterval = setInterval(function countdown() {
    console.log(10 - counter)
    counter++;
    if (counter == 11) setTimeout(function liftoff() {
        clearInterval(countdownInterval)
        console.log("Liftoff!")
    }, 1000)
}, 1000)