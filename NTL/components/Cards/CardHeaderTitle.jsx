import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import LinkName from '../../components/links/LinkName';


export default function CardHeaderTitle({navigation, title, subtitle, price}) {
  return (
    <>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDescription}>{subtitle}</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.textMake}>Creado por</Text>
            <LinkName 
            name="Marco Antonio"
            navigation={navigation}
            direction='TeacherProfile'
            />
        </View>
        <View style={styles.containerPressPrice}>
            <View style={styles.viewPrice}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>{price} MXN </Text>
                <Text style={{fontSize:18, color:'gray', textDecorationLine:'line-through'}}>399.00 MXN</Text>
            </View>
            <View style={styles.button}>
                <ButtonPrimary 
                text='Comprar curso'
                navigation={navigation}
                direction={'PlayCourse'}
                />
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
})
