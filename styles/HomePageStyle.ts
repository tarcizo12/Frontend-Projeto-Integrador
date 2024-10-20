import {StyleSheet, Platform } from 'react-native';

const Style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Isso mantém os botões no centro
      alignItems: 'center',
      padding: 20,
    },
    titleContainer: {
      position: 'absolute', // Isso faz com que o título seja posicionado no topo
      top: 50, // Ajuste conforme necessário para mover o título mais perto do topo
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Platform.OS === 'ios' ? 'blue' : 'green',
    },
    buttonContainer: {
      width: '100%',
      justifyContent: 'space-between',
      height: 100,
    },
  });


export default Style;
  