import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import HomePsciologoScreen from './screens/featurePsicologo/HomePsciologoScreen';
import PerfilPaciente from './screens/perfil/perfilPaciente';
import HomePacienteScreen from './screens/featurePaciente/HomePacienteScreen';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';

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
          component={PerfilPaciente}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenRoutes.HOME_PACIENTE_SCREEN}
          component={HomePacienteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
