import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CardHeaderTitle from '../../components/Cards/CardHeaderTitle';
import FlatSection from '../../components/flatList/FlatSection';


export default function DetailCourse({navigation, identicador}) {

  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewImg}>

            </View>
            <View style={styles.containerCard}>
                <CardHeaderTitle 
                navigation={navigation} />
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>{identicador} Lo que aprenderas:</Text>
                    <View>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Instalacion de Android studio en cualquier entorno</Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Utilizar buenas practicas en el desarrollo movil </Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Aprende Kotlin y sus utilidades en el desarrollo</Text>
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Crear tu primer aplicacion movil para tu CV</Text>
                        <Text style={{color:'rgb(99 102 241)', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                    </View>
                </View>
                {/* section */}
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Contenido del curso:</Text>
                    <View style={styles.viewSection}>
                        <FlatSection />
                        <FlatSection />
                        <FlatSection />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    {/*Requisitos coding  */}
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Requisitos:</Text>
                    <View>
                        <Text style={styles.textRequire}> - Fundamentos de programacion</Text>
                        <Text style={styles.textRequire}> - Fundamentos de programacion</Text>
                       
                        <Text style={{color:'rgb(99 102 241)', fontWeight:'bold', fontSize:15}}> Ver mas</Text>  
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    {/*descripcion */}
                    <Text style={{fontSize:18, fontWeight:'bold', marginBottom:7}}>Descripcion:</Text>
                    <View >
                        <Text style={{color:'gray', fontWeight:'400', fontSize:15, marginBottom:2}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima hic distinctio atque, dolorum accusamus earum eligendi fuga soluta perspiciatis amet rem maxime possimus doloribus aspernatur quaerat a excepturi quibusdam dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsa eligendi est accusamus, et quia cupiditate modi tempora eos omnis laudantium earum sunt ad at sint placeat inventore. Exercitationem, atque...
                        <Text style={{color:'rgb(99 102 241)', fontWeight:'bold', fontSize:15}}> Ver mas</Text>
                        </Text>
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
        borderWidth:1,
        borderStyle:'dashed',
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
