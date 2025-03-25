import React, { useEffect } from 'react';
import {View } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/common/CustomText';
import SearchBarPacientes from '@/common/SearchBarPacientes';
import RenderCellsPaciente from './components/RenderCellsPaciente';
import BackButton from '@/common/BackButton';
const MOCK_ID_PSICOLOGO_LOGADO = 1

export default function HomePsciologoScreen() {
  return (
    <View style={HomeScreenStyle.container}>
      <BackButton /> {/*Remover esse componente na versao final*/}   
      <CustomText label="Acompanhar pacientes" />  
      <SearchBarPacientes placeholder={'Buscar paciente'} />  
      <RenderCellsPaciente idPsicologoLogado={MOCK_ID_PSICOLOGO_LOGADO}></RenderCellsPaciente>
    </View>
);
}
