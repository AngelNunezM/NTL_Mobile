import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import LinkName from '../../components/links/LinkName';

import { Feather } from '@expo/vector-icons';
import useCursos from "../../hooks/useCursos";
import YoutubeIframe from "react-native-youtube-iframe";

export default function PlayCourse({navigation, route}) {
  const {ident, teacher} = route.params;
  const {lecciones, secciones, usuarios, cursos, capitulos, setCapitulos} = useCursos()
  const [id, setId] = useState(0)

  const handlePrev = () =>{
    if(id == 0){
      setId(0);
    }else{
      setId(id-1);
    }
  }
  const handleNext = () =>{
    setId(id+1);
  }

  return (
    <View>
      <View style={styles.viewFrame}>
        <YoutubeIframe
        height={250}
        width={390}
        play={true}
        videoId={capitulos[id].Fragmento}
        />      
      </View>
      <View>
        <View style={styles.viewControl}>
          
          <TouchableOpacity style={styles.buttonControl} onPress={()=>{handlePrev()}}>
            <Text style={{fontWeight:'bold'}}><Feather name="skip-back" size={15} color="black" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonControl}>
            <Text style={{fontWeight:'bold'}} onPress={() => {handleNext()}}><Feather name="skip-forward" size={15} color="black" /> </Text>
          </TouchableOpacity>
        </View>
        <View style={{padding:10,}}>
          <Text style={{fontSize:21}}>{capitulos[id].Nombre} </Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'gray'}}>Impartido por: </Text>
            <LinkName 
            teacher={teacher}
            navigation={navigation}
            direction='TeacherProfile'
            />
          </View>
          <View style={styles.viewSections}>
            <View style={{borderBottomWidth:1, paddingVertical:5}}>
              <Text style={styles.textSubtitle}>Clases</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            
              {
                secciones.map((seccion) => {
                  if(seccion.IdCurso == ident){
                  return (<>
                      <Text key={seccion.Id_Secciones} style={styles.textSection}>{seccion.Nombre}</Text>
                      <View>
                        {
                          lecciones.map((leccion)=>{
                            if(leccion.Id_Secciones == seccion.Id_Secciones){
                              return (
                                <Text key={leccion.Id_Lecciones} style={styles.textChapter}>{leccion.Nombre}</Text>
                              )
                            }
                          })
                        }
                      </View>
                      
                    </>)
                  }
                })
              } 
              
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewFrame:{
    marginTop:25,
    height:200,
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
