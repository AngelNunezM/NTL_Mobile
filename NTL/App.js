import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './screen/auth/LoginView';
import RegisterView from './screen/auth/RegisterView';
import HomeAuthView from './screen/auth/HomeAuthView';
import DetailCourse from './screen/courses/DetailCourse';
import PlayCourse from './screen/courses/PlayCourse';
import TeacherProfile from './screen/teachers/TeacherProfile';
import Password from './screen/auth/Password';
import MyCourse from './screen/courses/MyCourse';
import { BottomTab } from './screen/BottomTab';
import Profile from './screen/Profile';
import {CursosProvider} from './services/context/CursosProvider';

const Stack = createStackNavigator() 

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name={'HomeAuth'} component={HomeAuthView} options={{headerShown:false}}/>
      <Stack.Screen name={'Login'} component={LoginView} options={{headerShown:false}}/>
      <Stack.Screen name={'PasswordReintent'} component={Password} options={{headerShown:false}}/>
      <Stack.Screen name={'Register'} component={RegisterView} options={{headerShown:false}}/>
      <Stack.Screen name={'Home'} component={BottomTab} options={{headerShown:false}}/>   
      <Stack.Screen name={'MyCourses'} component={MyCourse} />
      <Stack.Screen name={'PlayCourse'} component={PlayCourse} options={{title:'Android Studio: DESDE CERO'}}/>
      <Stack.Screen name={'DetailCourse'} component={DetailCourse} options={{title:'Detalle de curso'}}/>
      <Stack.Screen name={'TeacherProfile'} component={TeacherProfile} options={{title:'Perfil profesor'}}/>
      <Stack.Screen name={'Profile'} component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <CursosProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </CursosProvider>
  );
}

