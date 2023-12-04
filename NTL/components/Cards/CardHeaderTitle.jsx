import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import LinkName from '../../components/links/LinkName';

import { Feather } from '@expo/vector-icons';
import useAuth from '../../hooks/useAuth';
import useCursos from '../../hooks/useCursos';

export default function CardHeaderTitle({navigation, title, subtitle, price, teacher, ident}) {
    const {idUser, getProfileprof} = useAuth();
    const {cursoUsuario, agregar, secciones, lecciones, cursos} = useCursos();
    const [check, setCheck] = useState(false);
    useEffect(()=>{
        getProfileprof(teacher)
    },[teacher])

    const searchRelation = (curso) =>{
        if(curso.IdCurso ==ident && curso.IdUsuario == idUser){
            console.log("Bienvenido")
            return true
        }
        else{
            console.log("enrrolled")
            return false
        }
    }
  return (
    <>
        <Text style={styles.textTitle}><Feather name="coffee" size={24} color="black" /> {title}</Text>
        <Text style={styles.textDescription}>{subtitle}</Text>
        <View style={{flexDirection:'row', display:'flex'}}>
            <Text style={styles.textMake}><Feather name="user" size={18} color="gray" /> Creado por</Text>
            <LinkName 
            teacher={teacher}
            navigation={navigation}
            direction='TeacherProfile'
            />
        </View>
        <View style={styles.containerPressPrice}>
            <View style={styles.viewPrice}>
                {
                    price==='Gratis'? 
                    (
                        <>
                            <Text style={{fontSize:24, fontWeight:'bold'}}>{price}</Text>    
                        </>
                    )
                    : 
                    (
                    <>
                        <Text style={{fontSize:24, fontWeight:'bold'}}>{price} MXN </Text>
                        <Text style={{fontSize:18, color:'gray', textDecorationLine:'line-through'}}>399.00 MXN</Text>
                    </>
                    )
                } 
            </View>
            <View style={{display:'flex', alignItems:'center', padding:10}}>
                <TouchableOpacity
                onPress={() => {
                    if(price === 'Gratis'){   
                        cursoUsuario.map((cursoUser)=>{
                            if((cursoUser.IdUsuario == idUser && cursoUser.IdCurso == ident) || true){
                               return navigation.navigate('PlayCourse',{ident:ident, teacher:teacher})      
                                }           
                            }
                        )    
                    }
                    else{
                        cursoUsuario.map((cursoUser)=>{
                            if(cursoUser.IdUsuario == idUser && cursoUser.IdCurso == ident){
                                  return  navigation.navigate('PlayCourse',{ident:ident, teacher:teacher})
                                }
                                else{
                                   return console.log("comprar")
                                }
                        })   
                    }
                }}
                style={styles.button}>
                    <Text style={styles.textButton}>{price=='Gratis'?'Ver curso':'Comprar'} </Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    textTitle:{
        fontSize:24,
        marginBottom:2
    },
    textDescription:{
        fontSize:16,
        color:'black',
        fontWeight:'300',
        marginBottom:5
    },
    textMake:{
        color:'gray',
        marginBottom:7
    },
    viewPrice:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        alignItems:'center',
        marginBottom:20
    },
    button:{
        padding: 15,
        width:'90%',
        backgroundColor:'rgb(99 102 241)',
        borderRadius:7,
    },
    textButton: {
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    },
})
