import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'

import { Feather } from '@expo/vector-icons'; 

export default function FlatSection({name}) {
  const [openChapter, setOpenChapter] = useState('none');

  const handleOpen = () => {
   
  }
  return (
    <TouchableOpacity style={styles.buttonSection} onPress={() => handleOpen()}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
          <Text style={{fontWeight:'700'}}>{name}</Text>
          <Feather name="chevron-down" size={18} color="black" />
        </View>
        <View style={{display:openChapter}}>

        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttonSection:{
        flexDirection:'row',
        padding:10,
        borderRadius:3,
        borderWidth:1,
        paddingHorizontal:15,
        display: 'flex',
        flexDirection:'column'
    },
    capitulos:{
      display:'none'
    }
})
