import { Text, TouchableOpacity, TextInput, View, ScrollView, StyleSheet} from 'react-native';
import CourseCard from '../components/Cards/CourseCard';
import CourseCardLong from '../components/Cards/CourseCardLong';
import CardWelcome from '../components/Cards/CardWelcome';
import useCursos from '../hooks/useCursos';
//resources needing
import { Feather } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';


export default function Home({navigation}) {
  
  
  const {cursos} = useCursos();
  const {authenticate} = useAuth();
  
  if(!authenticate){
    return (navigation.navigate('Login'))
  }
  
  return (
      <View>
        <View style={styles.viewSearch}>
        <Feather name="search" size={22} color="black" />
          <TextInput placeholder='Search' style={styles.inputSearch}/>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={{color:'white', fontWeight:'bold'}}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView 
          style={styles.scrollPrincipal}
          showsVerticalScrollIndicator={false}>
          <CardWelcome 
          navigation={navigation}/>
            <Text style={styles.textBody}>Todos los cursos</Text>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.viewScrollHead}>
              {
                cursos.map(curso => {
                  if(curso.Nombre === 'Gratis'){
                    return (
                      <CourseCard
                      key={curso.Id_Cursos}
                      navigation={navigation}
                      direction='DetailCourse'
                      title={curso.Titulo}
                      price={curso.Nombre}
                      subtitle={curso.Subtitulo}
                      teacher={curso.IdUsuario}
                      identificador={curso.Id_Cursos}
                      />
                    )
                  }
                })
              }
            </ScrollView>
            <View >
              <Text style={styles.textAllCourses}>Todos los cursos</Text>
              {
                cursos.map(curso => {
                  if(curso.Nombre != 'Gratis'){
                    return (
                      <CourseCardLong
                      key={curso.Id_Cursos}
                      navigation={navigation}
                      direction='DetailCourse'
                      title={curso.Titulo}
                      price={curso.Nombre}
                      subtitle={curso.Subtitulo}
                      teacher={curso.IdUsuario}
                      identificador={curso.Id_Cursos}
                      />
                    )
                  }
                })
              }
            </View>
          </ScrollView>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  scrollPrincipal:{
    marginBottom:150,
    height:640
  },
  textBody:{
    paddingHorizontal:15,
    fontSize:18,
    fontWeight:'700', 
    textAlign:'center'
  },
  textAllCourses:{
    paddingHorizontal:15,
    fontSize:18,
    fontWeight:'700',
    marginTop:10
  },
  viewSearch:{
    margin:15,
    paddingHorizontal:5,
    flexDirection:'row',
    gap:0,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
  },
  inputSearch:{
    width:'70%',
    padding:7,
    borderRadius:5,
  },
  buttonFilter:{
    backgroundColor:'black',
    padding:10,
    paddingHorizontal:25, 
    borderRadius:8
  }
})