import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import useCursos from '../../hooks/useCursos'
import useAuth from '../../hooks/useAuth'



export default function LinkName({teacher, navigation, direction}) {

  const {usuarios} = useCursos()
  const {getProfileprof} = useAuth()
 
  return (
    <TouchableOpacity 
    style={styles.viewName}
    onPress={ () => {
      if(getProfileprof.length > 0){
        navigation.navigate(direction, 
          {
          teacher:teacher,
          })
      }
      return
  }}
    >
    {
      usuarios.map((usuario) => {
        if(usuario.Id_Usuario == teacher){
          return ( <Text key={usuario.Id_Usuario} style={styles.textLink}> {usuario.Nombre} </Text>
          )
        }
      })
    }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textLink:{
        color:'rgb(99 102 241)',
        fontWeight:'700'
    },
    viewName:{
    }
})
