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
        <View>
          <ScrollView 
          style={styles.scrollPrincipal}
          showsVerticalScrollIndicator={false}>
            <CardWelcome 
            navigation={navigation}/>
            <Text style={styles.textBody}>Cursos Gratuitos</Text>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.viewScrollHead}>
              {
                cursos.map(curso => {
                  if(curso.Nombre === 'Gratis' && curso.Estatus =='3'){
                    return (
                      <CourseCard
                      key={curso.Id_Cursos}
                      navigation={navigation}
                      direction='DetailCourse'
                      title={curso.Titulo}
                      price={curso.Nombre}
                      subtitle={curso.Subtitulo}
                      teacher={curso.IdUsuario}
                      description={curso.Descripcion}
                      identificador={curso.Id_Cursos}
                      students={curso.Total}
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
                  if(curso.Nombre != 'Gratis' && curso.Estatus =='3'){
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
                      description={curso.Descripcion}
                      students={curso.Total}
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
    height:714
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
    marginTop:10, 
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