'use strict';
const got = require('got');
const fs = require('fs');

const args = process.argv.slice(2);
const url = arg[1] 
const filePath = arg[2]
console.log(`Downloading file from ${url} to ${filePath}`)
got.get(url, {responseType: 'json'}
  .then(res => {

})
)
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