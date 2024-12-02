import React, { useEffect } from 'react';
import {View } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import RenderCellsPaciente from './components/RenderCellsPaciente';
const MOCK_ID_PSICOLOGO_LOGADO = 1

export default function HomePsciologoScreen() {
  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Acompanhar pacientes" />     
      <SearchBarPacientes placeholder={'Buscar paciente'} />  
      <RenderCellsPaciente idPsicologoLogado={MOCK_ID_PSICOLOGO_LOGADO}></RenderCellsPaciente>
    </View>
);
}
