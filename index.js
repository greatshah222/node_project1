const fs = require('fs');
console.log('hello wrold');

// blocking synchronous way
const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textInput);
const textOutput = `this is what we know about the avacado : ${textInput}.\n Created on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOutput);
console.log('file has been written');


// Non-blocking async way

fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});
