import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import useCursos from '../../hooks/useCursos';

export default function CourseCardLong({navigation, direction, price, subtitle, title, teacher, identificador, description, students}) {
    const {recursos, usuarios} = useCursos();
    return (
    <TouchableOpacity onPress={() => {navigation.navigate(direction,
    {
        ident:identificador,
        title:title,
        price:price,
        subtitle:subtitle,
        descripcion:description,
        teacher:teacher
    }
    )}}>
        <View style={styles.containerCard}>
            <View style={styles.viewImage}>
            {
                    recursos.map((recurso)=>{
                        if(recurso.IdCurso == identificador){
                            return (<Image source={{uri: recurso.URL}}
                            style={{width: 100, height: 100, borderRadius:5}}/>)
                        }
                    })
                }
            </View>
            <View>
                <Text style={styles.textTitle}>{title} </Text>
                <Text style={styles.textDescription}>{subtitle} </Text>
                <Text style={styles.textImparted}>Impartido por: 
                {
                        usuarios.map(usuario => {
                            if(usuario.Id_Usuario === teacher){
                                return ( <Text style={styles.textTeacher}> {usuario.Nombre}</Text>)
                            }
                        })
                    }
                </Text>
                <View style={styles.viewPrice}>
                    <Text style={styles.textPrice}>{price}</Text>
                    <Text style={styles.textPrice}>{students} <Feather name="users" size={15} color="black" /></Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    containerCard:{
        padding:15,
        borderRadius:5,
        width:'auto',
        flexDirection:'row',
        backgroundColor:'white',
        margin:5,
        borderRadius:5
    },
    viewPrice:{
        width:240,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textTitle:{
        fontWeight:'bold',
        fontSize:16,
        width:270
    },
    textImparted:{
        color:'gray',
        fontSize:12
    },
    textTeacher:{
        color:'rgb(99 102 241)',
        fontWeight:'700',
        fontSize:12
    }
    ,
    textPrice:{
        fontWeight:'bold'
    },
    textDescription:{
    fontWeight:'400',
    color:'gray',
    width:'60%'
    },
    viewImage:{
        width:100,
        marginRight:10,
        backgroundColor:'rgb(99 102 241)',
        borderRadius:5,
        height:100,
        marginBottom:2,
    }
});
