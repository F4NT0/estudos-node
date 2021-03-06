# Utilizando Express

* Express.js é um Framework Web para o Node.js.
* Site com Documentação: [http://expressjs.com](http://expressjs.com/)
* Ele é um Framework minimalista que utiliza a linguagem Javascript para desenvolver programas web, como de lojas ou blogs.
* Com poucas linhas de código ja podemos ter um Web Service.

### Como instalar em um Projeto

Para instalar precisamos do NPM e com ele instalado utilizamos o seguinte comando:

```shell
> npm install express --save
``` 

### Primeiro Arquivo de Leitura

Quando iniciamos um projeto em Node com o comando `npm init`, ele nos pergunta qual o arquivo principal para ler como **main**, como no caso o normal é o _index.js_

### Iniciando o Express no Projeto

Para podermos utilizar o Express, precisamos importar o Módulo dele no Arquivo desejado, no caso o _index.js_

```javascript
var express = require("express");
```

Depois de importado o Express, precisamos iniciar ele no nosso Projeto, instanciando o Express em uma Variável que iremos chamar de app

```javascript
var app = express();
```

**Função listen**

Com essa variável podemos usar as Funções definidas do Express no nosso Projeto, como no caso a Função **listen()** que fica "ouvindo" uma porta na rede esperando por uma resposta

Abaixo um exemplo do _listen()_, onde recebe como Parâmetro o número da Porta desejada e como opcional uma função para enviar

```javascript
app.listen(8080,function(){
    console.log("Hello World");
});
```

Rodamos o Arquivo com o comando `node index.js` no Terminal, onde vai aparecer no mesmo terminal a mensagem _Hello World_

**Função get**

Com a Função get, podemos tratar os dados que estão vindo do Browser, onde possui dois Parâmetros, o primeiro parâmetro é a Página que irá lidar e o segundo parâmetro é função que possui dois parâmetros, que são:

* **request**: É um Objeto que vai encapsular os dados que estão sendo recebidos da página definida
* **response**: É um Objeto que vai encapsular o que servir como resposta ao request feito

Com esses dados o cabeçalho da nossa Função _get_ fica assim:

```javascript
app.get("/",function(req,res){
    //lidando com os dados
});
```

* **"/"** é a página Home do projeto web, sendo a primeira página lida
* **req** é uma abreviação para o **request**
* **res** é uma abreviação para o **response**

**Função send**

Com a função _send_ podemos enviar dados para uma porta específica, onde é passado pelo **response** na função get, como a mensagem abaixo:

```javascript
app.get("/",function(req,res){
    res.send("Hello World");
});
```

Neste comando acima, quando acessarmos a página home definida, ele vai enviar a mensagem Hello World para a página e poderemos ler

### Juntando tudo (teste incial)

Agora o código inteiro e teste dos comandos básicos de Express:

```javascript
var express = require("express");
var app = express();

// Função get e send
app.get("/",function(req,res){
    res.send("Hello World!");
})

// Função listen
app.listen(8080,function(){
    console.log("Servidor Rodando! \n Acesse https://localhost:8080/");
})
```

---

## Enviando Página HTML usando Express

Agora que fizemos nosso Hello World, iremos enviar uma Página HTML para o Browser.

Primeira coisa, iremos chamar um Módulo interno do Nodejs chamado **path**:

```javascript
var path = require("path");
```

Com esse módulo podemos pegar a Constante *__dirname* que vai pegar o caminho dos Diretórios até o diretório atual que estamos trabalhando

**Função sendFile**

A Função sendfile do Express serve para apresentarmos um Arquivo HTML para o Browser, onde como parâmetro devemos dizer o caminho até o nosso Arquivo desejado, como no exemplo

```javascript
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
```

Essa Função _sendfile_ vai enviar um arquivo estático HTML para aparecer na página definida.

### Enviando mais de um Arquivo

Agora vamos utilizar outras duas Funções para carregarmos mais arquivos com o express, onde temos as seguintes funções:

**Função static**

Essa Função serve para dizermos qual Diretório interno de nosso Projeto possui os Arwuivos estáticos desejados

**Função use**

Essa Função serve para dizermos ao express qual arquivos desejamos que ele use, onde usamos a Função static dentro

Vamos ver como exemplo o seguinte, temos o seguinte conjunto de Diretórios:

<img src="../images/folders.png">

Se queremos que o Express pegue todos os Arquivos dentro dele, construimos a seguinte linha de código:

```javascript
app.use(express.static("arquivos"));
```

Com essa linha ele vai pegar todos os arquivos dentro do Diretório arquivos que foram chamados nos outros arquivos, como por exemplo:

```html
<!-- Arquivo index.html -->

<head>
    <meta charset="utf-8">
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="../css/index.css">
</head>

```

Com esse arquivo _index.css_ no Diretório _arquivos/css/_ ele vai ser lido junto com o _index.html_ por causa das Funções do **use** e **static**


<code style="color: red">Teste</code>
