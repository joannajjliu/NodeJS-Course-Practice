const fs = require('fs');
const { request } = require('http');

function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head><title>Enter Message</title></head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>`);
        return res.end(); //quit function execution
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {// executed until ALL incoming request data is read
            console.log("chunk", chunk);
            body.push(chunk);
        }); //register event listener, listening for 'data' event
    
        return req.on('end', () => {//register TO BE executed, therefore async, isn't called until conditions are met
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody", parsedBody);
            const message = parsedBody.split('=')[1];
            
            // fs.writeFileSync('message.txt', message); //"Sync" blocks all code execution until this line is complete
    
            fs.writeFile('message.txt', message, (err) => {//callback executed once writeFile is completed
                res.writeHead(302, {'Location': '/'}); //statusCode, headers
                return res.end();
            }); 
        });
    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>My first page</title></head>
    <body><h1>Hello from my Node.js Server!</h1></body>
    </html>`);
    res.end(); //node sends res back to client
    
    //process.exit(); //hard exits event loop, shutting down node.js program

};

// module.exports = requestHandler; //single export

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }; //module.exports (exports also supported by Node) is a global object, exposed by Node

exports.handler = requestHandler;
exports.someText = 'some hard coded text TWO';
