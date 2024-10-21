import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';

export default function HomePsciologoScreen() {

  return (
    <View style={HomeScreenStyle.container}>
      <View style={HomeScreenStyle.titleContainer}>
        <CustomText label={"Implementacao para tela de psicologo"}></CustomText>
      </View>
    </View>
  );
}
