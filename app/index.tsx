import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { LoadingProvider } from '@/hooks/LoadingContext';
import { UsuarioLogadoProvider } from '@/hooks/UsuarioLogadoProvider';
import { Colors } from '@/constants/Colors';

import HomeScreen from './screens/home/HomeScreen';
import HomePsicologoScreen from './screens/featurePsicologo/HomePsicologoScreen';
import HomePacienteScreen from './screens/featurePaciente/homeScreen/HomePacienteScreen';
import CalendarioPaciente from './screens/featurePaciente/calendarioPaciente/CalendarioPaciente';
import RegistrosPaciente from './screens/featurePaciente/registrosPaciente/RegistrosPaciente';
import PerfilPacienteByPsciologoScreen from './screens/featurePaciente/perfil/PerfilPacienteByPsciologoScreen';
import CreateUser from './screens/createUser/CreateUser';
import ForgotMyPass from './screens/forgotMyPass/ForgotMyPass';
import PerfilPaciente from './screens/perfilPaciente/PerfilPaciente';

import Icon2 from '../icons/notes.png';
import Icon3 from '../icons/add.png';
import Icon4 from '../icons/person.png';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function PacienteTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveBackgroundColor: '#20A69F',
        tabBarInactiveBackgroundColor: '#20A69F',
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 10,
          backgroundColor: '#20A69F',
        },
      }}
    >
      <Tab.Screen
        name="HomePacienteTab"
        component={HomePacienteScreen}
        options={{
          tabBarLabel: 'Nova Anotação',
          tabBarIcon: ({ focused }) => <Image source={Icon3} style={{ width: 25, height: 25, tintColor: '#fff', opacity: focused ? 1 : 0.7 }} />,
        }}
      />
      <Tab.Screen
        name="RegistrosPacienteTab"
        component={RegistrosPaciente}
        options={{
          tabBarLabel: 'Registros',
          tabBarIcon: ({ focused }) => <Image source={Icon2} style={{ width: 25, height: 25, tintColor: '#fff', opacity: focused ? 1 : 0.7 }} />,
        }}
      />
      <Tab.Screen
        name="PerfilPacienteTab"
        component={PerfilPaciente}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => <Image source={Icon4} style={{ width: 25, height: 25, tintColor: '#fff', opacity: focused ? 1 : 0.7 }} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <LoadingProvider>
        <UsuarioLogadoProvider>
          <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName={ScreenRoutes.HOME_SCREEN}>
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.HOME_SCREEN} component={HomeScreen} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.HOME_PSICOLOGO_SCREEN} component={HomePsicologoScreen} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO} component={PerfilPacienteByPsciologoScreen} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.HOME_PACIENTE_SCREEN} component={PacienteTabNavigator} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.CALENDARIO_PACIENTE} component={CalendarioPaciente} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.REGISTROS_PACIENTE} component={RegistrosPaciente} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.CREATE_USER} component={CreateUser} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.FORGOT_MY_PASSWORD} component={ForgotMyPass} />
              <Stack.Screen options={{ headerShown: false }} name={ScreenRoutes.PERFIL_PACIENTE} component={PerfilPaciente} />
            </Stack.Navigator>
          </NavigationContainer>
        </UsuarioLogadoProvider>
      </LoadingProvider>
    </SafeAreaProvider>
  );
}
