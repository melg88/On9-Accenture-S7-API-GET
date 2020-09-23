const express = require('express');
const app = express();
const porta = 3000;
const mulheres = require('./mulheres.json')

app.use(express.json());


app.get('/mulheres', function(requisicao, resposta){
  resposta.json(mulheres);
});
 
app.get('/mulheres/:id', function(requisicao, resposta){
  const { id } = requisicao.params
  const mulher = data.find(mu => mu.id == id)
     
  resposta.json(mulher);

});

app.listen(porta, function(){
  console.log("Servidor rodando")
});