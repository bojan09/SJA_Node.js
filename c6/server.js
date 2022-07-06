const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server test");
  // console.log(req);
  console.log(req.url);
  console.log(req.method);
  res.end("Server is available"); // испрати одговор и затвори го повикот
});

server.listen(8080);

/*

192.168.1.20 - IP address (Internet Protocol Address)
0.0.0.0 - 255.255.255.255 // A, B, C, D
IPV4 / IPV6

PROVIDER --->---- ROUTER ---->--- COMPUTER (N)
                            NAT
NAT - Network Address Translation

port 80 - HTTP
port 443 = HTTPS

wikipedia.org работи на default порт 80 и 443
http://wikipedia.org
https://wikipedia.org

локален сервис (сервер) работи на нестандардна порта 10000
http://localhost:10000

default ports
- web server application 80, 443
- ftp server application: 21
- ssh server application: 22
- smtp server application: 25
- proxy server application: 8080
- ...

server - компјутер поврзан на интернет
server application / service - апликација која е поставена на server (и работи на сопствена порта)

-----------------------------

req - request - повикот од клиент према сервер
res - response - одговорот што серверот го испраќа према клиентот

localhost === 127.0.0.1

*/
