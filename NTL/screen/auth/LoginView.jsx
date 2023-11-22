import React from 'react'
import { StyleSheet,TouchableOpacity, Text, View, Image, KeyboardAvoidingView, StatusBar} from 'react-native';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import InputForm from '../../components/Inputs/InputForm';


export default function LoginView({navigation}) {
 
  
  return (
      <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding" 
      keyboardVerticalOffset={50}>        
        <Image 
        source={require('../../assets/logo1.png')}
        style={styles.imagestyle}/>   
        
        <View style={styles.viewContent}>
          <InputForm 
          text="Email"
          place="example@gmail.com..."
          />
          <InputForm 
          text="Contraseña" 
          place="*****"/>
          <ButtonPrimary navigation={navigation} direction={'Home'} text="Iniciar sesion"/>
          <TouchableOpacity  onPress={() => {navigation.navigate('PasswordReintent')}}>
            <Text style={styles.text}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
        <Text style={{color:'gray', fontWeight:'300', textAlign:'center', marginTop:10}}>NTL Education v1.0</Text>
      </KeyboardAvoidingView>
    );   
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  imagestyle: {
      width: 150, 
      height:150, 
  },
  textrecordar:{
      fontWeight:'300',
      marginTop:10,
      textDecorationLine:'underline',
      marginRight:'200',
  },
  
  textBody:{
    fontWeight:'300'
  },
  textButton:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },
  button:{
    padding: 10,
    width:'90%',
    marginTop:15,
    backgroundColor:'#000',
    borderRadius:7
  },
  viewContent:{
    width:'80%',
    alignItems: 'center',
    marginTop:10,
    backgroundColor:'#fff',
    paddingVertical:20,
    borderRadius:5
  },

  text:{
    fontWeight:'300',
    marginTop:10,
    textDecorationLine:'underline',
    marginRight:'200',
    
   
  },
text2:{
  fontWeight:'300',
  marginTop:10,
  textAlign:'left'
},

});

