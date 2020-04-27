const fs = require('fs');
const http = require('http');
const { url } = require('url');






//console.log('hello wrold');

// // blocking synchronous way
// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textInput);
// const textOutput = `this is what we know about the avacado : ${textInput}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOutput);
// console.log('file has been written');


// // Non-blocking async way

// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('error😹🤮');
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, err => {
//                 console.log('file added')


//             });
//         });
//     });
// });
//


/*
Server
*/
// the user the get the data as soon as they hit the route /api instead of reading the page first and then sending the result

// this is executed only once so this is sync function
const dataJson = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');

const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const dataObj = JSON.parse(dataJson);
const replacetemplate = ((temp, product) => {
    let output = temp.replace(/{%ProductName%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%Quantity%}/g, product.quantity);
    output = output.replace(/{%Nutrients%}/g, product.nutrients);
    output = output.replace(/{%Description%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;


});

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;
    // Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        const cardsHtml = dataObj.map(el => {
            return replacetemplate(tempCard, el)

        }).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

        // console.log(cardsHtml);
        res.end(output);


    } // product page 
    else if (pathName === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(tempProduct);
    }
    //Api
    else if (pathName === '/api') {
        fs.readFile(`${__dirname} / starter / dev - data / data.json`, 'utf-8', (err, data) => {
            // TELL BROWSER WE ARE SENDING JSON
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);


        });



    }
    // not found page
    else {
        res.writeHead(404, {
            'Content-type': 'text/html'

        });
        res.end('<h1>Oops. Page not found </h1>');
    }


});

// listen to incoming request 
server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request on port 8000');

});

