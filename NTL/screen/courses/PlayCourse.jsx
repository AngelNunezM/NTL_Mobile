import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import LinkName from '../../components/links/LinkName';

export default function PlayCourse({navigation}) {
  return (
    <View>
      <View style={styles.viewFrame}>
        <Text>Frame del video</Text>
      </View>
      <View>
        <View style={styles.viewControl}>
          <TouchableOpacity style={styles.buttonControl}>
            <Text style={{fontWeight:'bold'}}>⏮ Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonControl}>
            <Text style={{fontWeight:'bold'}}>Siguiente ⏭</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding:10,}}>
          <Text style={{color:'gray', fontWeight:'bold'}}>Seccion 1 - Instalacion de Android studio</Text>
          <Text style={styles.textTitle}>Descargando el SDK de Android Studio</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'gray', marginBottom:10}}>Impartido por</Text>
            <LinkName 
            name='Marco Huitron'
            navigation={navigation}
            direction='TeacherProfile'
            />
          </View>
          <View style={styles.viewSections}>
            <View style={{borderBottomWidth:1, paddingVertical:5}}>
              <Text style={styles.textSubtitle}>Clases</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.textSection}>Seccion 1 - Instalacion de Android studio (3)</Text>
              <View>
                <Text style={styles.textChapter}>▶ Descargando el SDK de Android Studio</Text>
                <Text style={styles.textChapter}>2. Instalacion del SDK 27</Text>
                <Text style={styles.textChapter}>3. Configuracion de las variables de entorno</Text>
              </View>
              <Text style={styles.textSection}>Seccion 2 - Conceptos Basicos (4)</Text>
              <View>
                <Text style={styles.textChapter}>4. Mi primer aplicacion con JAVA</Text>
                <Text style={styles.textChapter}>5. Variables y tipos de datos</Text>
                <Text style={styles.textChapter}>6. Estructuras de control (If y Switch)</Text>
                <Text style={styles.textChapter}>7. Estructuras de control (for, white y do while)</Text>
              </View>
              <Text style={styles.textSection}>Seccion 1 - Instalacion de Android studio (3)</Text>
              <View>
                <Text style={styles.textChapter}>▶ Descargando el SDK de Android Studio</Text>
                <Text style={styles.textChapter}>2. Instalacion del SDK 27</Text>
                <Text style={styles.textChapter}>3. Configuracion de las variables de entorno</Text>
              </View>
              <Text style={styles.textSection}>Seccion 2 - Conceptos Basicos (4)</Text>
              <View>
                <Text style={styles.textChapter}>4. Mi primer aplicacion con JAVA</Text>
                <Text style={styles.textChapter}>5. Variables y tipos de datos</Text>
                <Text style={styles.textChapter}>6. Estructuras de control (If y Switch)</Text>
                <Text style={styles.textChapter}>7. Estructuras de control (for, white y do while)</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewFrame:{
    height:200,
    borderWidth:1,
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center'
  },
  viewControl:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  buttonControl:{
    padding:5,
    paddingHorizontal:15,
    borderRadius:3,
    borderWidth:1
  },
  textTitle:{
    fontSize:22
  },
  textSubtitle:{
    fontSize:18,
    fontWeight:'500',
    color:'black'
  },
  textSection:{
    fontWeight:'bold',
    marginTop:7,
    fontSize:12, 
    color:'gray'
  },
  textChapter:{
    padding:5,
    fontSize:16
  },
  viewSections:{
    height:400
  }
})
