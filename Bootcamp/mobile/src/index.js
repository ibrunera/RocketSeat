import React, {useState, useEffect} from 'react'
import {SafeAreaView,FlatList, StyleSheet, StatusBar, Text, TouchableOpacity} from 'react-native'
import api from './services/api'


export default function App(){
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    api.get('projects').then(response=>{
      setProjects(response.data)
    })
  },[])

  async function handleAddProject(){
    const response = await api.post('projects',{
      title:`Projeto ${Date.now()}`,
      owner:'Peter P.'
    })
    const project = response.data

    setProjects([...projects,project])
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project=>project.id}
          renderItem={({item:project})=>(
            <Text style={styles.title}>{project.title}</Text>
          )}
        />
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.btn}
          onPress={handleAddProject}
        > 
          <Text style={styles.btnText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#7159c1',
    flex:1,
  },
  title: {
    color:'#fff',
    fontSize:32,
  },
  btn:{
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:5,
    height:50,
    justifyContent:'center',
    margin:20,
  },
  btnText:{
    color:'#7159c1',
    fontSize:20,
    fontWeight:'bold',
  }
})