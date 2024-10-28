import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import HomePsciologoScreen from './screens/featurePsicologo/HomePsciologoScreen';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  //LogBox.ignoreAllLogs(); // descomentar ao finalizar o projeto
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Psicologo" component={HomePsciologoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
