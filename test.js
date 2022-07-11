/*`100 days of code*/
document.write("hello world<br>");

/**
 * @author pranith
 */

var a = 5;

/**
 *
 * @brief to calculate factorial of an number
 * @param {*} n any integer
 * @returns an integer which is factorial of the number
 */

function factorial(n) {
	if (n == 1) return 1;
	return factorial(n - 1) * n;
}

document.write(factorial(5) + "<br>");
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
