const fs = require('fs');
console.log('hello wrold');

// blocking synchronous way
const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textInput);
const textOutput = `this is what we know about the avacado : ${textInput}.\n Created on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOutput);
console.log('file has been written');


// Non-blocking async way

fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('error😹🤮');
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, err => {
                console.log('file added')


            });
        });
    });
});
