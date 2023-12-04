import axios from 'axios';
import React, {useState } from 'react'


const AuthContext = React.createContext();


const AuthProvider = ({children}) =>{
  const baseUrl = 'http://192.168.137.152:9000';
   const [authenticate, setAuthenticate] = useState(false)
   const [idUser, setIdUser] = useState('')
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [profileTeacher, setProfileTeacher] = useState([]);
   const [profileProf, setProfileProf] = useState([]);
   
   const handleLogin = () =>{
      axios.post(baseUrl+'/api/Users', {
        Email:email,
        Passwordd:password
      }).then((response) => { return authentic(response.data)
      }).catch((error) => {
        console.error('Error durante el inicio de sesión:', error);
        // Manejar el error de manera apropiada (por ejemplo, mostrar un mensaje amigable al usuario)
      });
   }

   const handleRegister = () => {
    axios.post(baseUrl+'/api/Users/user', {
      Nombre:name,
      Email:email,
      Passwordd:password
    }).then((response) => {
      
      console.log(response.status)
    })
   }

   const authentic = async (users) =>{
    const user = await users;
    if(user.length === 0){
      setEmail('')
      setPassword('')
     return setAuthenticate(false)
    }else{
      setEmail(user[0].email);
      setName(user[0].name);
      setIdUser(user[0].id)
      getProfileTeacher(idUser)
    return  setAuthenticate(true)
    }
   }

   const handleLogOut = () =>{
    setAuthenticate(false)
    setEmail('')
    setName('')
    setIdUser('');
   }

   const getProfileTeacher = (idUser) => {
    axios.get(baseUrl+'/api/Perfiles/'+idUser)
    .then((response) => {setProfileTeacher(response.data)
    })       
  }

  const getProfileprof = (idUser) => {
    axios.get(baseUrl+'/api/Perfiles/'+idUser)
    .then((response) => {setProfileProf(response.data)
    })       
  }
  
   const handleChangePassword = (password) =>{
    setPassword(password)
   }

   const handleChangeEmail = (email) =>{
    setEmail(email)
   }

   const handleChangeName = (name) =>{
    setName(name)
   }
   

    return(
        
        <AuthContext.Provider
            value={{
                authenticate, 
                email,
                password,
                name,
                handleChangeEmail,
                handleChangePassword,
                handleChangeName,
                handleLogin,
                handleLogOut,
                idUser,
                handleRegister,
                getProfileTeacher,
                profileTeacher:profileTeacher,
                getProfileprof:getProfileprof,
                profileProf:profileProf
            }}
        >{children}</AuthContext.Provider>
    )
}
export{AuthProvider}
export default AuthContext;