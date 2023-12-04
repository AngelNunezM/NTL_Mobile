import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';

export default function HomeAuthView({navigation}) {
  return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/phone.png')}
            style={{width:400, height:400}}
            />
            <Text style={{fontWeight:'500', textAlign:'center', fontSize:28}}>Aprendizaje automatizado al alcanze de tu mano</Text>
            <Text style={{fontWeight:'300', textAlign:'center', fontSize:14}}>Inicia sesion para acceder a todos nuestros cursos, si no tienes cuenta registrate!</Text>
            <View style={styles.buttonContainer}>
                <ButtonPrimary navigation={navigation} direction={'Login'} text='Iniciar sesion'/>
                <ButtonSecondary navigation={navigation} direction={'Register'} text='Registrarse'/>
            </View> 
        </View>
  )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    buttonContainer: {
        width: '80%',
        alignItems:'center',
        flexDirection: 'column',
    },
  }
);
  
  
