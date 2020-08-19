# Criando um Módulo em Javascript

* Agora podemos criar um Módulo com todas as Funções que precisamos
* Criamos o módulo em um Arquivo separado chamado `modulo.js`
* Iremos importar esse Arquivo no Arquivo `app.js` que é o principal

* Foi criado as seguintes funções no arquivo _modulo.js_

```javascript
function soma(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}
```

* Para que essas Funções estejam disponiveis para outros arquivos devemos exportar cada uma
* usamos o comando **exports** para dizer que essa função está publica para outros Arquivos

```javascript
exports.soma = soma;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
```

* Agora vamos importar o Módulo para o arquivo `app.js`
* para isso no arquivo app.js devemos criar uma Variável importando o arquivo módulo

```javascript
let funcoes = require("./modulo.js");
```
* se deve colocar o _./_ porque é o caminho até o Arquivo e a extensão dele

* depois que importamos, podemos utilizar as funções do `modulo.js`
* para usarmos uma função, devemos chamar a variavel **funcoes** e depois chamar o nome da função.
* para chamar a função chamamos o nome da variavel, colocamos um ponto e chamamos o nome da função

```javascript
let soma = funcoes.soma(a,b);
```

* agora para vermos o resultado no terminal utilizamos o `console.log()`:

```javascript
console.log("Soma: ",soma);
```