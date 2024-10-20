import React from 'react';
import { Text, StyleSheet, Platform, View, Button } from 'react-native';
import Style from '@/styles/HomePageStyle';

export default function HomeScreen() {
  return (
    <View style={Style.container}>
      <View style={Style.titleContainer}>
        <Text style={Style.title}>Projeto Integrador</Text>
      </View>

      <View style={Style.buttonContainer}>
        <Button title="Ir para tela de paciente" onPress={() => alert('Botão 1 pressionado')} />
        <Button title="Ir para tela do psicologo" onPress={() => alert('Botão 2 pressionado')} />
      </View>
    </View>
  );
}
