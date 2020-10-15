# Repositório de Estudos com Nodejs

### Ordem de Matéria

Ordem de Estudo|Nome da Matéria|Diretório para Leitura
|---|---|---|
1|Introdução ao Node.js|**introducao**
2|Criando Módulos|**criando-modulos**
3|Primeiro Projeto Web|**primeiro-projeto-web**
4|Entendo o Express|**entendendo-express**


### Entendo o Básico

**Node.js** é um Runtime para rodar programas na linguagem **Javascript** em Servidores. Com o Node você pode criar APIs, Aplicações usando a Arquitetura MVC usando a linguagem Javascript em todo o Processo. 

Para entender melhor tem duas partes junto ao Javascript que devem ser entendidas:

* **Javascript Engine**: também conhecido como **Interpretador**, é um programa que compila códigos escritos em Javascript.
* **Javascript Runtime**: é o ambiente onde o código é executado e interpretado por uma Javascript engine, onde o Runtime provê para o Javascript Engine tudo que ele precisa para ser executado.

O Node.js é um Runtime do Javascript e com isso ele entrega para a Engine tudo que ela precisa para Executar.

A Engine que o Node.js já vem junto é o **V8**, que é uma Engine do Google Chrome para compilar o código Javascript.

### Como o Node Funciona

* Na maioria das Linguagens, o modelo de leitura é **Síncrono**, ou seja, cada linha do código é lida em ordem até finalizar o Arquivo, onde uma linha é executada após a outra em uma fila de execução ou _Thread_.
* O Node.js funciona de forma **Assíncrona**, ou seja, ele não precisa esperar que uma consulta ao banco de dados ou uma linha anterior termine sua execução, ele não fica bloqueado enquanto uma ação está acontecendo, dessa forma ele vai colocando os pedidos sendo feitos em uma lista de eventos e vai retornando quando os eventos vão sendo finalizados, quando uma ação determinada acontece ele causa um **Evento**(event) que vai apresentar o que foi pedido
* Podemos passar o resultado do evento ou como um **Parâmetro** ou como um **Callback** onde quando finalizado o processo ele vai pegar a resposta.

### Para que tipo de programa ele serve

* utiliza-se Node.js para programas que precisam de uma **resposta em tempo real**, como Chats, Jogos e programas que tenham um fluxo rápido de muitos dados, onde com esse sistema Assíncrono se consegue receber resposta muito mais rápidas, evitando que o programa pare enquanto está lendo os processos grandes
* Node.js possui muito boa **performance**, dessa forma é bem rápida
* Além dessa performance, se pode utilizar o Node.js não só no **Backend(onde fica a lógica)** como no **Frontend(onde fica a visualização)** 

### O que é NPM

**N**ode **P**ackage **M**anager (Gerenciador de Pacotes do Node) vem junto quando instalamos o Node no computador e ele é extremamente útil quando desenvolvemos com Nodejs

Com NPM podemos instalar módulos externos em nossos programas, que nos podem ajudar nos projetos e trazer novas funcionalidades, onde com ele também podemos construir um projeto que utiliza o node, onde ele constroi um Diretório com todos os Módulos instalados chamado **Node_Modules/** sendo um Diretório bem pesado devido que ele guarda vários módulos criados.

* **Comandos Importantes do NPM**

Como o NPM funciona pelo Terminal, existem comandos importantes utilizados para podermos instalar ou utilizar o NPM

Comando|Para que serve
|---|---|
`npm -v`|Verificar a versão do NPM
`npm update -g npm`| Atualiza o NPM, onde o _-g_ significa instalação global da nova versão
`npm init`| Inicia um projeto Node no Diretório que você estiver, criando um Arquivo chamado _package.json_ com as versões dos módulos do Projeto
`npm install <nomeModulo>`|Instala um módulo pelo seu nome, onde no caso não tem os <>, exemplo: _npm install cli-color_
`npm install express`|Principal Framework de Desenvolvimento de projetos Web pelo Node.js
`npm install`| Só o comando _npm install_ vai instalar todos os módulos descritos no _package.json_ no Diretório com esse arquivo, para que não precise enviar o *node_modules/* para o Repositório git