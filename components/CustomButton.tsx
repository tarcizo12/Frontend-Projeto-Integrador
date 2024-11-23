import React from 'react';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '@/components/CustomText';

export default function CustomButton({ label, func }: { label: string; func: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={func}>
      <CustomText label={label}/>
    </TouchableOpacity>
  );
}

const { width } = Dimensions.get('window'); // Obtém a largura da tela

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50', // Verde agradável
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra para Android
    marginVertical: 10, // Espaço entre botões
    width: width * 0.8, // 90% da largura da tela
    alignSelf: 'center', // Centraliza o botão horizontalmente
  },
});

