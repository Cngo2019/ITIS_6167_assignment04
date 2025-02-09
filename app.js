const { createServer } = require('node:http');
const { exec } = require('node:child_process')
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log(process.platform);
  exec('start .', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
