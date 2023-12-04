import React, { useState } from 'react'
import { StyleSheet,TouchableOpacity, Text, View, Image, KeyboardAvoidingView, StatusBar, TextInput} from 'react-native';
import useAuth from '../../hooks/useAuth';
import useCursos from '../../hooks/useCursos';



export default function LoginView({navigation}) {
  const [error, setError] = useState(false);
  const {email, password, handleChangeEmail, handleChangePassword, handleLogin, authenticate} = useAuth();

  return (
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding" 
        keyboardVerticalOffset={50}>       
        <View style={{display:'flex'}}>
          <Image 
          source={require('../../assets/logo1.png')}
          style={styles.imagestyle}/>
        </View>
        <View style={styles.viewContent}>
          {error==true?(<Text style={{color:'rgb(250,50,50)', backgroundColor:'rgb(250,180,180)', padding:3, fontWeight:'500', borderRadius:3}}>Todos los campos deben estar completos</Text>):""}   
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Usuario:</Text>
            <TextInput 
            style={styles.inputText}
            placeholder={'example@example.com'}
            onChangeText={text => {
              handleChangeEmail(text)
            }
            }
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>Contraseña:</Text>
            <TextInput 
            style={styles.inputText}
            placeholder={'******'}
            onChangeText={text => {
              handleChangePassword(text)
              
            }}
            secureTextEntry
            />
        </View>
          <TouchableOpacity
            onPress={() => {
              if(email === "" || password ===""){
                setError(true)
                return
              }
              else{ 
               handleLogin()
               if(authenticate){
                navigation.navigate('Home');
               }else{
                console.log("error")
               }
               console.log("credenciale erroenass")
              }
            }}
            style={styles.button}>
                <Text style={styles.textButton}>Iniciar Sesion</Text>
          </TouchableOpacity>
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
button:{
  padding: 15,
  width:'90%',
  marginTop:20,
  backgroundColor:'#101010',
  borderRadius:7
},
textButton: {
  color:'#fff',
  textAlign:'center',
  fontWeight:'bold'
},
text1:{
  fontWeight:'300',
  marginTop:10,
  textAlign:'left'
},
inputText:{
  padding:10,
  paddingHorizontal:15,
  backgroundColor:'#fff',
  borderWidth: .5,
  borderRadius:7,
  width:'100%',
  marginTop:5,
},
textContainer: {
  alignItems: 'flex-start', 
  width: '90%', 
  marginTop:5
},

});

