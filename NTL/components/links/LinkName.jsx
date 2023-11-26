import React, { useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import useCursos from '../../hooks/useCursos'
import axios from 'axios'

export default function LinkName({teacher, navigation, direction}) {

  const {usuarios} = useCursos()
  return (
    <Pressable 
    style={styles.viewName}
    onPress={() => {
      navigation.navigate(direction, 
      {
      teacher:teacher,
      }
    )
    
  }}
    >
    {
      usuarios.map((usuario) => {
        if(usuario.Id_Usuario == teacher){
          return ( <Text style={styles.textLink}> {usuario.Nombre} </Text>
          )
        }
      })
    }
    </Pressable>
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
