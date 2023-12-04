import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity , Image} from 'react-native'
import useAuth from '../hooks/useAuth'

export default function Profile({navigation}) {
  const {handleLogOut, name, email, profileTeacher} = useAuth();

  return (
    <View style={{height:690, justifyContent:'space-between'}}>
      <View>
        <View style={{alignItems:'center', padding:30}}>
          <Image source={{uri:profileTeacher[0].photoPerfil}} width={100} height={100} borderRadius={160}/>
          <Text style={{fontSize:22, fontWeight:'bold'}}>{name}</Text>
          <Text style={{fontSize:14, color:'gray'}}>{email}</Text>
        </View>
        <View>
          <Text style={{fontSize:14, color:'gray', fontWeight:'bold', padding:15}}>Configuracion de la cuenta</Text>
          <View>
            <Text style={styles.textOptions}>Informacion personal</Text>
            <Text style={styles.textOptions}>Seguridad de la cuenta</Text>
          </View>
          <Text style={{fontSize:14, color:'gray', fontWeight:'bold', padding:15}}>Informacion util</Text>
          <View>
            <Text style={styles.textOptions}>Ayuda</Text>
            <Text style={styles.textOptions}>Colaboradores</Text>
            <Text style={styles.textOptions}>Contribuir</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => {
        handleLogOut();
        navigation.navigate('Login')
        }}>
        <Text style={styles.textButton}>Cerrar sesion</Text>
      </TouchableOpacity>
      <Text style={{color:'gray', fontWeight:'300', textAlign:'center', }}>NTL Education v1.0</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewPhoto:{
    padding:20,
    backgroundColor:'rgb(99 102 241)',
    borderRadius:160,
    width:100,
    height:100,
    marginBottom:7
  },
  textOptions:{
    fontWeight:'400',
    padding:5,
    marginHorizontal:20,
    fontSize:16
  },
  textButton:{
    fontWeight:'bold',
    color:'rgb(99 102 241)',
    fontSize:17,
    textAlign:'center'
    }
})
