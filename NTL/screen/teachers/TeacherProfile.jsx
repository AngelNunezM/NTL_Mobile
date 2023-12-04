import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CourseCardLong from '../../components/Cards/CourseCardLong';
import useCursos from '../../hooks/useCursos';
import useAuth from '../../hooks/useAuth';



export default function TeacherProfile({navigation, route}) {
  const {cursos, usuarios} = useCursos();
  const {profileProf} = useAuth();
  const { teacher} = route.params

  return (
    <View>
      <View>
        <View style={{alignItems:'center', marginTop:30, marginBottom:10}}>
          {
            usuarios.map((usuario) => {
              if(usuario.Id_Usuario == teacher){
                return (
                <>
                    <View >
                      <Image source={{uri: profileProf[0].photoPerfil}} width={100} height={100} borderRadius={160}/>
                    </View>
                  <Text key={usuario.Id_Usuario} style={{fontSize:24, fontWeight:'bold', marginBottom:5}}>{usuario.Nombre} </Text>
                </>
                )
              }
            })
          }
          <Text style={{color:'gray', padding:10, borderRadius:7}}>{profileProf[0].Bibliografia}</Text>
        </View>
        <View style={{height:520}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{paddingHorizontal:10, fontWeight:'bold', padding:5, fontSize:18}}>Cursos Impartidos</Text>
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
