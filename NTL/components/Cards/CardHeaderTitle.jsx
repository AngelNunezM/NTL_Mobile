import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import LinkName from '../../components/links/LinkName';

import { Feather } from '@expo/vector-icons';

export default function CardHeaderTitle({navigation, title, subtitle, price, teacher}) {
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
