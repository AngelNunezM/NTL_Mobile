import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import useCursos from '../../hooks/useCursos';

export default function CourseCard({navigation, direction, title, subtitle, teacher, price, identificador}) {

    const {usuarios} = useCursos();

    return (
    <TouchableOpacity onPress={() => {navigation.navigate(direction,
    {
        ident:identificador,
        title:title,
        price:price,
        subtitle:subtitle,
        teacher:teacher
    }
    )}}>
        <View style={styles.containerCard}>
        <View style={styles.viewImage}>
        </View>
        <View>
            <Text style={styles.textTitle}>{title} </Text>
            <Text style={styles.textDescription}>{subtitle} </Text>
            <Text style={styles.textImparted}>Impartido por: 
            {
                usuarios.map(usuario => {
                    if(usuario.Id_Usuario === teacher){
                        return ( <Text style={styles.textTeacher}> {usuario.Nombre} </Text>)
                    }
                })
            }
            </Text>
            <View style={styles.viewPrice}>
                <Text style={styles.textPrice}>{price}</Text>
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
        width:200
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
        fontWeight:'400',
        fontSize:12
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
        borderRadius:2,
        height:100,
        marginBottom:2,
        borderRadius:3
    }
});
