import React from 'react';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '@/common/CustomText';

export default function InputLogin({ label, func }: { label: string; func: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={func}>
      <CustomText label={label}/>
    </TouchableOpacity>
  );
}

const { width } = Dimensions.get('window'); // Obtém a largura da tela

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6495ed', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    marginVertical: 10, 
    width: width * 0.5, 
    alignSelf: 'center', 
  },
});

