'use strict';
const request = require('request');;
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0] 
const filePath = args[1]
console.log(`Downloading file from ${url} to ${filePath}`)

request(url, (error, response, body) => {
	console.log('error:', error);
	console.log('statusCode:', response && response.statusCode);
  console.log('content-length: ', contentLength);
});
const net = require('net');
const conn = net.createConnection({ 
  host: 'example.edu',
  port: 80
});
conn.setEncoding('UTF8');

const content = 'Some content!' // populated by th easyn call back in the 'got res' call back/promise

fs.writeFile(filePath, content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})