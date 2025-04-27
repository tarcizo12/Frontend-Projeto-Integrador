import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import HomePsciologoScreen from './screens/featurePsicologo/HomePsciologoScreen';
import HomePacienteScreen from './screens/featurePaciente/homeScreen/HomePacienteScreen';
import CalendarioPaciente from './screens/featurePaciente/calendarioPaciente/CalendarioPaciente';
import RegistrosPaciente from './screens/featurePaciente/registrosPaciente/RegistrosPaciente';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import PerfilPacienteByPsciologoScreen from './screens/featurePaciente/perfil/PerfilPacienteByPsciologoScreen';
import CreateUser from './screens/createUser/CreateUser';
import ForgotMyPass from './screens/forgotMyPass/ForgotMyPass';
import PerfilPaciente from './screens/perfilPaciente/PerfilPaciente';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={ScreenRoutes.HOME_SCREEN}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.HOME_PSICOLOGO_SCREEN}
          component={HomePsciologoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO}
          component={PerfilPacienteByPsciologoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.HOME_PACIENTE_SCREEN}
          component={HomePacienteScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.CALENDARIO_PACIENTE}
          component={CalendarioPaciente}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.REGISTROS_PACIENTE}
          component={RegistrosPaciente}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.CREATE_USER}
          component={CreateUser}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.FORGOT_MY_PASSWORD}
          component={ForgotMyPass}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.PERFIL_PACIENTE}
          component={PerfilPaciente}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
