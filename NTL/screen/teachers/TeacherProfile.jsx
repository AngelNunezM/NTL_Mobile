import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import CourseCardLong from '../../components/Cards/CourseCardLong';
import useCursos from '../../hooks/useCursos';


export default function TeacherProfile({navigation, route}) {
  const {cursos, usuarios} = useCursos();
  const { teacher} = route.params
  return (
    <View>
      <View>
        <View style={{alignItems:'center', marginTop:30, marginBottom:20}}>
          {
            usuarios.map((usuario) => {
              if(usuario.Id_Usuario == teacher){
                return (<Text style={{fontSize:24, fontWeight:'bold', marginBottom:5}}>{usuario.Nombre} </Text>)
              }
            })
          }
          <View style={styles.viewPhoto}>
            <Text>Perfil</Text>
          </View>
          <Text style={{fontSize:14, fontWeight:'400', color:'gray', textAlign:'center', padding:7}}>Profesor de la Universidad Tecnologico de la Laguna, y mentor en medios digitales como NTL.</Text>
        </View>
        <View style={{height:520}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{paddingHorizontal:10, fontWeight:'bold', padding:5, fontSize:18}}>Cursos Impartidos (27)  -</Text>
            <TouchableOpacity>
              <Text style={{color:'rgb(99 102 241)', fontWeight:'bold', fontSize:14}}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {
                cursos.map(curso => {
                  if(curso.IdUsuario == teacher){
                    return (
                      <CourseCardLong
                      key={curso.Id_Cursos}
                      navigation={navigation}
                      direction='DetailCourse'
                      title={curso.Titulo}
                      price={curso.Nombre}
                      subtitle={curso.Subtitulo}
                      teacher={curso.IdUsuario}
                      identificador={curso.Id_Cursos}
                      description={curso.Descripcion}
                      students={curso.Total}
                      />
                    )
                  }
                })
              }
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewPhoto:{
    padding:20,
    borderWidth:1,
    borderRadius:20,
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,
    
    }
})
