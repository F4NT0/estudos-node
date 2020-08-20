// Inicializando um Servidor

let http = require("http");
let color = require("cli-color");
let fs = require("fs");

http.createServer(function(request,response){
    fs.readFile("index.html",function(error,content){
        if(error){console.log(error);}
        else{response.write(content);}
        response.end();
    })
}).listen(8081);

console.log(color.green("Servidor sendo Inicializado..."));
console.log(color.yellow("Servidor Rodando em http://localhost:8081"));