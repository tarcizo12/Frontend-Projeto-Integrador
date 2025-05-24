import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usando Material Icons para a seta

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',        // Para posicionar o botão de volta de forma absoluta
    left: 10,                       
  },
  button: {
    backgroundColor: '#6495ed',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 5,
    flexDirection: 'row',        // Garante que o ícone e o texto (se necessário) fiquem lado a lado
    alignItems: 'center',        // Centraliza o ícone verticalmente
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
