// index.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const filePath = path.join(__dirname, 'Data.txt');
const fileContent = "This is Assignment of week-2. Our work is to utilize Node.js core modules such as File System, Path, and HTTP to create a simple file management tool that can create, read, and delete files.";

const server = http.createServer((req, res) => {
  if (req.url === '/create' && req.method === 'GET') {
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        res.writeHead(500);
        res.end('Failed to create file.');
      } else {
        res.writeHead(200);
        res.end('File created successfully!');
      }
    });

  } else if (req.url === '/read' && req.method === 'GET') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });

  } else if (req.url === '/delete' && req.method === 'GET') {
    fs.unlink(filePath, (err) => {
      if (err) {
        res.writeHead(500);
        res.end('Error deleting file.');
      } else {
        res.writeHead(200);
        res.end('File deleted successfully.');
      }
    });

  } else {
    res.writeHead(404);
    res.end('write route name  to know the data(create,read,delete). Use /create, /read, or /delete');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
