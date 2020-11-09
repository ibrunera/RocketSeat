const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects',(request, response)=>{
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects',(request, response)=>{
  const {title, owner} = request.body;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id',(request, response)=>{
  const { id } = request.params;

  console.log(id);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3 novo',
  ]);
});

app.delete('/projects/:id',(request, response)=>{
  const { id } = request.params;

  console.log(id);

  return response.json([
    'Pojeto 1',
    'Projeto 2',
  ]);
});

app.listen(3333,()=>{
  console.log('🛹 Servidor rodando em http://localhost:3333/projects  ');
});