import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import useCursos from '../../hooks/useCursos';

import { Feather } from '@expo/vector-icons';

export default function CourseCard({navigation, direction, title, subtitle, teacher, price, identificador, description, students}) {

    const {usuarios, recursos} = useCursos();

    return (
    <TouchableOpacity onPress={() => {navigation.navigate(direction,
    {
        ident:identificador,
        title:title,
        price:price,
        subtitle:subtitle,
        teacher:teacher,
        descripcion:description
    }
    )}}>
        <View style={styles.containerCard}>
            <View style={styles.viewImage}>
                {
                    recursos.map((recurso)=>{
                        if(recurso.IdCurso == identificador){
                            return (<Image key={recurso.Id_Recurso} source={{uri: recurso.URL}}
                            style={{width: 170, height: 100, borderRadius:5}}/>)
                        }
                    })
                }
            </View>
            <View style={{display:'flex', flexDirection:'column', height:130, justifyContent:'space-between'}} >
                <View>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.textDescription}>{subtitle}</Text>
                    <Text style={styles.textImparted}>Impartido por: 
                    {
                        usuarios.map(usuario => {
                            if(usuario.Id_Usuario === teacher){
                                return ( <Text key={usuario.Id_Usuario} style={styles.textTeacher}> {usuario.Nombre}</Text>)
                            }
                        })
                    }
                    </Text>
                </View>
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
        width:200,
    },
    viewPrice:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
    textImparted:{
        color:'gray',
        fontSize:12
    },
    textTeacher:{
        color:'rgb(99 102 241)',
        fontWeight:'700',
        fontSize:12,
    },
    textPrice:{
        fontWeight:'bold'
    },
    textDescription:{
    fontWeight:'400',
    color:'gray'
    },
    viewImage:{
        backgroundColor:'rgb(99 102 241)',
        borderRadius:100,
        height:100,
        marginBottom:2,
        borderRadius:3
    }
});
