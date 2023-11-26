import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import CardHeaderTitle from '../../components/Cards/CardHeaderTitle';
import FlatSection from '../../components/flatList/FlatSection';
import useCursos from '../../hooks/useCursos';

import { Feather } from '@expo/vector-icons'; 


export default function DetailCourse({navigation, route}) {

    const { ident, title, subtitle, price, teacher, descripcion } = route.params
    const { requerimientos, competencias, secciones, recursos } = useCursos()

    return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewImg}>
            {
                    recursos.map((recurso)=>{
                        if(recurso.IdCurso == ident){
                            return (<Image source={{uri: recurso.URL}}
                            style={{width: 370, height: 195, borderRadius:5}}/>)
                        }
                    })
                }
            </View>
            <View style={styles.containerCard}>
                <CardHeaderTitle 
                navigation={navigation} 
                title={title} 
                subtitle={subtitle}
                price={price}
                teacher={teacher}
                />
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}><Feather name="award" size={18} color="black" /> Lo que aprenderas:</Text>
                    <View>
                        {
                            competencias.map((competencia) => {
                                if(competencia.IdCurso == ident){
                                    return (
                                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}><Feather name="check-square" size={15} color="gray"/> {competencia.Nombre}</Text>
                                    )
                                }
                            })
                        }
                    </View>
                </View>
                {/* section */}
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}><Feather name="clipboard" size={18} color="black" /> Contenido del curso:</Text>
                    <View style={styles.viewSection}>
                        {
                            secciones.map((seccion) =>{
                                if(seccion.IdCurso == ident){
                                    return(
                                        <FlatSection 
                                        name={seccion.Nombre} />
                                    )
                                }
                            })
                        }
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    {/*Requisitos coding  */}
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}><Feather name="help-circle" size={18} color="black" /> Requisitos:</Text>
                    <View>
                        {
                            requerimientos.map((requerimiento) => {
                                if(requerimiento.IdCurso == ident){
                                    return (
                                        <Text style={styles.textRequire}><Feather name="hash" size={15} color="gray" /> {requerimiento.Nombre}</Text>
                                    )
                                }
                            })
                        }
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    {/*descripcion */}
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}><Feather name="info" size={18} color="black" /> Descripcion:</Text>
                    <View >
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> {descripcion}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    viewImg:{
        height:200,
        margin:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    containerCard:{
        marginHorizontal:10
    },
    viewSection:{
        gap:7
    },
    textRequire:{
        color:'gray',
        fontWeight:'400',
        fontSize:15,
        marginBottom:2
    },
    
})
