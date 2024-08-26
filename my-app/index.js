/*
3. File Operations:

File Write (/file-write): When the server receives a request to the /file-write URL, use the fs.writeFile() method to create a file named demo.txt. The file should contain the text "hello world". After writing the file, send an appropriate response to the client.


const http = require("http");
const server = http.createServer( (req , res) => {

    if(req.url == "/") {
        res.end("This is the Home Page");
    }
    if(req.url == "/about") {
        res.end("This is the About Page");
    }
    if(req.url == "/contact") {
        res.end("This is the Contact Page");
    }
    if(req.url == "/file-write") {
        return CreateNewFile();
    }
    
} )

server.listen(5500 , () => {
    console.log("server running on 5500 port ...");
})



const fs = require("fs");

async function CreateNewFile() {
    try {
        const data = await fs.writeFileSync('demo.txt','hello world');
        console.log("File is Successfully created");
    }
    catch(e) {
        console.log(e);
    }
}

(async () => {   
    await CreateNewFile();   
})()
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('This is the Home Page');
    }
    else if (req.url === '/about') {
        res.end('This is the About Page');
    } 
    else if (req.url === '/contact') {
        res.end('This is the Contact Page');
    } 
    else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.end('Error writing file');
            } else {
                res.end('File written successfully');
            }
        });
    } 
    else {
        res.end('Page not found');
    }

});

server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
