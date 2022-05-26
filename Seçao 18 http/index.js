const {createServer, request}= require('http');

let server = createServer((request,Response)=>{

     Response.writeHead(200,{'content-Type': 'text/html'});
     Response.write(`
      <h1>hello world</h1>
      <p>primeira pagina com node.js</p>
     `)
    Response.end();

});

server.listen(8000);
console.log('estou ouvindk bb')
