import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

export default function LinkName({name, navigation, direction}) {
  return (
    <Pressable 
    style={styles.viewName}
    onPress={() => {navigation.navigate(direction)}}
    >
        <Text style={styles.textLink}> {name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    textLink:{
        color:'rgb(99 102 241)',
        fontWeight:'600'
    },
    viewName:{
    }
})
