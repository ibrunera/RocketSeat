const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors())
app.use(express.json());

const projects = []

function logRequests(request, response, next){
  const {method, url} = request;

  const logLabels = `[${method}] ${url}`

  console.time(logLabels);

  next();

  console.timeEnd(logLabels);
}

function validadeProjectId(request, response, next){
  const {id} = request.params;

  if(!isUuid(id)){
    return response.status(400).json({error:'Invalid project ID'});
  }

  return next();
}

app.use(logRequests);

app.use('/projects/:id',validadeProjectId);

app.get('/projects', (request, response)=>{
  const { title, owner } = request.query;
  
  /*
  let results = []
  if(title != undefined){
    results = projects.filter(element=>element.title.includes(title))
  }else{
    results = projects
  }
  */

  const results = title
    ? projects.filter(element=>element.title.includes(title))
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response)=>{
  const {title, owner} = request.body;

  const project = {id:uuid(), title, owner};

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id',(request, response)=>{
  const { id } = request.params;
  const {title, owner} = request.body;
  
  const projectIndex = projects.findIndex(element=>element.id===id)

  if(projectIndex < 0){
    response.status(400).json({message:'Project not found.'})
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return response.json(projects[projectIndex]);
});

app.delete('/projects/:id',(request, response)=>{
  const { id } = request.params;

  const projectIndex = projects.findIndex(element=>element.id===id)

  if(projectIndex < 0){
    response.status(400).json({message:'Project not found.'})
  }

  projects.splice(projectIndex,1);

  return response.status(204).send();
});

app.listen(3333,()=>{
  console.log('🛹 Servidor rodando em http://localhost:3333/projects  ');
});