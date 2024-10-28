import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import SearchBarPacientes from '@/components/SearchBarPacientes';

export default function HomePsciologoScreen() {
  const { width } = Dimensions.get('window');

  const stylesSearchBar = {
    input: {
      backgroundColor: '#F6F7FB',
      borderRadius: 30,
    },

    container: {
      width: width * 0.9,
      backgroundColor: '#ffffff0',
      //backgroundColor: 'green',
      borderBottomWidth: 0,
      borderTopWidth: 0,      
    },

    inputStyle: {
      color: '#000000',
    },
  };

  return (
    <View style={HomeScreenStyle.container}>
      <View style={HomeScreenStyle.titleContainer}>        
        <CustomText label="Acompanha+" />            
      </View>
      <SearchBarPacientes placeholder={'Buscar paciente'} style={stylesSearchBar}/>    
    </View>
  );
}
