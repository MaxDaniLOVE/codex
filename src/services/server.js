const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  fs.readFile("./src/services/input.txt", "utf8", (error, data) => {
    if(error) throw error;
    const newData = {
      c: [],
      l: [],
      r: [],
      b: []
    }
    data.split('\n')
      .map(e => {
        const splitedArray = e.split(' ')
        splitedArray[0] === 'C' ?  newData.c.push(splitedArray.slice(1)) :
        splitedArray[0] === 'L' ?  newData.l.push(splitedArray.slice(1)) :
        splitedArray[0] === 'R' ?  newData.r.push(splitedArray.slice(1)) :
        splitedArray[0] === 'B' ?  newData.b.push(splitedArray.slice(1)) :
        null;
      });
    res.end(JSON.stringify(newData));
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
