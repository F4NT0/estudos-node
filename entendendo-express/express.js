/**
 * TESTE DE FUNÇÕES DO EXPRESS
 * Explicação de Como funciona: https://github.com/F4NT0/estudos-node/tree/master/entendendo-express
 */
var express = require("express");
var app = express();

// Função get
app.get("/",function(req,res){
   res.send("Hello World"); 
});

app.listen(8080,function(){
    console.log("Servidor Iniciado! \n Acesse http://localhost:8080/");
});
