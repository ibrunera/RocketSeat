import React, {useState} from 'react';

import './App.css';
import bckgImg from './assets/dog.jpg';

import Header from './components/Header';

function App(){
  const [projects,setProjects] = useState([]);

  function handleAddProject(){
    setProjects([...projects, `Projeto ${Date.now()}`]);
    console.log(projects);
  };

  return (
    <>
      <Header title="Projects"/>

      <img width={300} src={bckgImg} />

      <ul>
          {projects.map(project=><li key={project}>{project}</li>)}
      </ul>

      <button
        type="button"
        onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;