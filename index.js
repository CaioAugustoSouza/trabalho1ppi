

import express from 'express';

const host = '0.0.0.0' 
const app = express ();
const porta = 3000;
function mostrarTabuada (requisicao, resposta) {
    let valorRequerido = requisicao.query.valor;
    let quantasVezes = requisicao.query.quantasVezes;
    if (!quantasVezes){
        quantasVezes = 10;
    }


    resposta.write ('<!DOCTYPE html>');
    resposta.write ('<html>');

    resposta.write ('<head>');
    resposta.write ('<meta charset = "utf-8">');
    resposta.write ('<title>Pagina inicial</title>');
    resposta.write ('</head>');
    
    resposta.write ('<body>');
    if (valorRequerido){
        resposta.write ('<h1>Tabuada do '+ valorRequerido + '</h1>');
        for (let i = 0; i<quantasVezes; i++){
            resposta.write ('<p>'+valorRequerido + 'x' + (i+1) + '=' +valorRequerido*(i+1)+'</p>');
        }
    }
    else{
        resposta.write ('<h1>Nenhuma requisição foi feita na URL.</h1>');
        resposta.write ('<p>Faça a requisição por esse modelo: http://localhost:3000/tabuada?valor[valor]&quantasVezes=[valor-opcional]</p>');
    }
    resposta.write ('</body>');
    resposta.write ('</html>');

    resposta.end ();
};


function dafaultPage (requisicao, resposta) {
    resposta.write ('<!DOCTYPE html>');
    resposta.write ('<html>');

    resposta.write ('<head>');
    resposta.write ('<meta charset = "utf-8">');
    resposta.write ('<title>Pagina inicial</title>');
    resposta.write ('</head>');
    
    resposta.write ('<body>');
    resposta.write ('<h1>Acesse /tabuada para calcular a tabuada</h1>');
    resposta.write ('</body>');
    resposta.write ('</html>');

    resposta.end ();
};


app.get ('/', dafaultPage);
app.get ('/tabuada', mostrarTabuada);




//()=>{} função anonima conhecida como arrow function
app.listen(porta, host, ()=>{
    console.log("O servidor está executando em http://"+host+':'+porta);
} );


