import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'

import { Feather } from '@expo/vector-icons'; 
import useCursos from '../../hooks/useCursos';

export default function FlatSection({name, section, ident}) {
  const [openChapter, setOpenChapter] = useState(false);
  const {lecciones, setCapitulos, capitulos} = useCursos()

  const handleOpen = () => {
   setOpenChapter(!openChapter)
  }
  useEffect(()=>{
         lecciones.forEach((leccion)=>{
          if(leccion.Id_Secciones == section){
             setCapitulos((capitulos)=>[...capitulos, leccion])
          }
    });
  },[ident])
  return (
    <TouchableOpacity style={styles.buttonSection} onPress={() => handleOpen()}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
          <Text style={{fontWeight:'700'}}>{name}</Text>
          {
            openChapter === true? (<Feather name="chevron-up" size={18} color="black"/>): (<Feather name="chevron-down" size={18} color="black"/>)
          }
        </View>
        <View style={openChapter === true ? {display:'flex'} : {display:'none'}}>
          {
            lecciones.map((leccion) => { 
              if(leccion.Id_Secciones == section){
                return (<Text key={leccion.Id_Lecciones} style={{padding:3,}}><Feather name="play-circle" size={14} color="black"/> {leccion.Nombre} </Text>)
              }
            })
          }
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonSection:{
        flexDirection:'row',
        padding:10,
        borderRadius:3,
        borderWidth:.5,
        paddingHorizontal:15,
        display: 'flex',
        flexDirection:'column',
        backgroundColor:'white'
    },
    capitulos:{
      display:'none'
    },

})
