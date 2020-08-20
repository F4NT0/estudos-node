# Criando um Projeto web inicial

### Iniciando um Servidor

* Agora iremos ver como construir uma aplicação web com Node.js
* para podermos iniciar um Servidor com Node, devemos usar uma biblioteca básica do Node chamada `http`

```javascript
let http = require("http");
```
* Iremos criar um Servidor e iremos utilizar uma função que pega a **Requisição**(request) e iremos entregar uma **Resposta**(response) para ele que iremos construir dentro da função.
* Além disso vamos dizer qual a **porta** de Saída na web que vai ser lida essa saída usando a função `listen()`

```javascript
http.createServer(function(request,response){
    response.write("Servidor Inicializado com Sucesso!"); // Mensagem na Web
    response.end();
}).listen(8081); // Porta 8081 vai ser nossa Porta na Web
```

* O nosso Servidor pode ser acessado pela Web pelo Link `http://localhost:8081`
* Além disso irei colocar uma Mensagem para aparecer no Terminal dizendo que o Servidor Foi Iniciado

```javascript
console.log(color.yellow("Servidor Rodando em http://localhost:8081"));
```

### Lendo uma Página HTML

* Para podermos ler algum Arquivo HTML devemos chamar a Biblioteca `fs`
* Essa Biblioteca serve para podermos:
  * Abrir Arquivos
  * Ler Conteúdo
  * Escrever Conteúdo

* Vamos então criar a Função de criar um Servidor

```javascript
http.createServer(function(request,response){
    //...
}).listen(8081);
```
* Mas agora vamos usar a biblioteca `fs` para ler um Arquivo HTML:

```javascript
http.createServer(function(request,response){
    fs.readFile("index.html",function(error,content){
        if(error){console.log(error);}
        else{response.write(content);}
        response.end();
    })
}).listen(8081);
```

* Entendendo Melhor o que está escrito:

```javascript
fs.readFile("index.html",function(error,content){
        if(error){console.log(error);}
        else{response.write(content);}
        response.end();
    })
```

Nome da Função|Para que Serve
|---|---|
fs.readFile()| Vai ler o Arquivo com o nome da String de Entrada
function(error,content)|Função que vai ajudar a verificar se possui algum erro
if(error)|se tiver um erro ele vai retornar o erro
else(response.write(content))|se não possuir um erro ele vai devolver o conteudo lido no Arquivo HTML
response.end()|finaliza a leitura

