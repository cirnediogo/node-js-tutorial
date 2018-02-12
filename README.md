## Passo a passo:


### 1.  Criar servidor Node JS básico

Obter o módulo `http` previamente instaladao.

```javascript
var http = require('http');
```

Usar método `createServer()` para retornar um novo objeto do tipo servidor. O método de callback passado como parâmetro é executado sempre que há uma requisição ao servidor. O servidor utilizará os objetos de requisição e resposta (`req` e `res`) que contêm informações e funcionalidades para lidar com o HTTP.

O método `writeHead()` é utilizado para inserir informações no cabeçalho do resposta HTTP. O método `end()` é usado para finalizar a resposta e o conteúdo é opcional.

```javascript
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World');
});
```

Especificar a porta de escuta pelo método `listen`.

```javascript
server.listen(3000);
console.log('Server running at http://localhost:3000/');
```


### 2.  Cadeia de requisições

Obter e inicializar o módulo `connect`.

```javascript
var connect = require('connect');
var app = connect();
```

Criar os métodos que deverão tratar as requisições até que um deles envie uma resposta. No exemplo, o objetivo é criar um log para rastrear todas as requisições feitas.

```javascript
var logger = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

var helloWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};
```

Registrar de forma ordenada os métodos criados como aqueles que irão tratar as requisições, como uma fila.

Sempre que houver uma requisição, o `connect` tentará obter uma resposta por meio do primeiro método registrado, neste caso o `logger`. No entanto o método não dá uma resposta e, com a chamada `next()`, passa a requisição para o próximo na fila, neste exemplo o `helloWorld`.

O `connect` continuará buscando uma resposta até que ele se depare com o `res.end()`.

```javascript
app.use(logger);
app.use(helloWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
```


### 3.  Cadeia de requisições em endereços diferentes

Obter e inicializar o módulo `connect`.

```javascript
var connect = require('connect');
var app = connect();
```

Criar os métodos que deverão tratar as requisições até que um deles envie uma resposta. No exemplo, o objetivo é criar um log para rastrear todas as requisições feitas.

```javascript
var logger = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

var helloWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World');
  res.end();
};

var goodbyeWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye World');
};
```

Registrar de forma ordenada os métodos criados como aqueles que irão tratar as requisições, como uma fila.

Neste exemplo, o `logger` será executado em qualquer requisição feita, já o `helloWorld` e o `goodbyeWorld` apenas serão executados quando feitas requisições aos endereços `/hello` e `/goodbye` respectivamente.

As requisições então serão encadeadas até que alguém responda com o `res.end()`.

```javascript
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');
```


### 4.  Servidor básico com Express

O Express é uma extensão do Connect e oferece algumas funcionalidades úteis para aplicações web.

Obter o módulo `express`.

```javascript
var express = require('express');
var app = express();
```

O método `app.use()` cria um middleware que trata as requisições ao caminho dado, neste caso o caminho raiz da aplicação. O paramêtro `req` contém diversos atributos relativos à requisição que podem ser utilizados pela aplicação. Por fim, o `res.send()` é usado para enviar a resposta por meio do mesmo método `res.end()` do Connect.

```javascript
app.use('/', function (req, res, next) {
  console.log("query:" + req.query);
  console.log("params:" + req.params);
  console.log("body:" + req.body);
  console.log("path:" + req.path);
  console.log("hostname:" + req.hostname);
  console.log("ip:" + req.ip);
  console.log("cookies:" + req.cookies);
  res.send('Hello World');
});
```

Fazer o servidor iniciar na porta 3000 e exportá-lo para ser usado em outros arquivos.

```javascript
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
```
