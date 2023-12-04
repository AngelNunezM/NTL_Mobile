import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CourseCardLong from '../../components/Cards/CourseCardLong';
import useAuth from '../../hooks/useAuth';
import useCursos from '../../hooks/useCursos';


export default function MyCourse({navigation}) {
  const {idUser} = useAuth();
  const {cursos, cursoUsuario} = useCursos();
 

  return (
    <View>
      <Text style={styles.textTitle}>Todos mis cursos</Text>
      <ScrollView style={{marginBottom:50}}>
      {
        cursoUsuario.map((cursoUser) => {
          if(cursoUser.IdUsuario == idUser){
            return  cursos.map((curso) => {
              if(cursoUser.IdCurso == curso.Id_Cursos){
                return (
                  <CourseCardLong
                  key={curso.Id_Cursos}
                  navigation={navigation}
                  direction={'PlayCourse'}
                  title={curso.Titulo}
                  price={curso.Nombre}
                  subtitle={curso.Subtitulo}
                  teacher={curso.IdUsuario}
                  description={curso.Descripcion}
                  identificador={curso.Id_Cursos}
                  students={curso.Total}/>
                ) 
              }
            })
          }     
        })
      }
      </ScrollView>
    </View>
  )
}
/**/
const styles = StyleSheet.create({
  textTitle:{
    fontSize:18, 
    fontWeight:'bold',
    paddingHorizontal:15,
    marginTop:15,
    paddingVertical:7,
  }
})
