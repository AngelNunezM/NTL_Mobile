import React, {useState} from 'react'
import { Text, View, KeyboardAvoidingView, Image, StyleSheet, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import useAuth from '../../hooks/useAuth';


export default function RegisterView({navigation}) {
  const [error, setError] = useState(false);
  const {name, email, password, handleChangeEmail, handleChangePassword, handleChangeName, handleRegister} = useAuth()

  return (
        <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding" 
      keyboardVerticalOffset={50}>
        <View style={styles.viewContent}>
        <Image 
        source={require('../../assets/logo1.png')}
        style={styles.imagestyle}/>
        {error==true?(<Text style={{color:'rgb(250,50,50)', backgroundColor:'rgb(250,180,180)', padding:3, fontWeight:'500', borderRadius:3}}>Todos los campos deben estar completos</Text>):""}   
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Nombre:</Text>
            <TextInput 
            style={styles.inputText}
            placeholder={'alejandro..'}
            onChangeText={text => handleChangeName(text)}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Email:</Text>
            <TextInput 
            style={styles.inputText}
            placeholder={'example@gmail.com'}
            onChangeText={text => handleChangeEmail(text)}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Contraseña:</Text>
            <TextInput 
            style={styles.inputText}
            placeholder={'**********'}
            onChangeText={text => handleChangePassword(text)}
            secureTextEntry
            />
          </View>
           <TouchableOpacity
            onPress={() => {
              if(email === "" || password ==="" || name ===""){
                setError(true)
                return
              }else{
                handleRegister()
                navigation.navigate('Login')
              }
              }}
            style={styles.button}>
                <Text style={styles.textButton}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
          <Text style={styles.text}>Ya tengo una cuenta!</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color:'gray', fontWeight:'300', textAlign:'center', marginTop:10}}>NTL Education v1.0</Text>
        <StatusBar style="auto" />
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
  },button:{
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
