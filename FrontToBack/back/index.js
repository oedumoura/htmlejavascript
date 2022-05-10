const http = require('http');   

function onRequest(request, response) {
    if(request.url === '/') {
        response.writeHead(200);
        response.end('Sistema funcionando');
    }
    console.log(request.url);
    if(request.url.includes('/login')) {
        const params = request.url.split('?');
        const passwordParam = params[1];
        if(passwordParam === 'password=123'){
            response.writeHead(200);
            response.end('LOGIN EFETUADO COM SUCESSO');
        } else{
            response.writeHead(400);
            response.end('USUARIO NAO AUTORIZADO');
        }

    }

    if(request.url === '/erro') {
        response.writeHead(400);
        response.end('Erro');
    }
}

const server = http.createServer(onRequest);
server.listen(8080, () => {
    console.log('Servidor Funcionando! Acesse em http://localhost:8080');
});