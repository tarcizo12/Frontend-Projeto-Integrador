import React from 'react';
import {View } from 'react-native';
import {HomeScreenStyle} from '@/styles/HomeScreenStyle';
import CustomText from '@/common/CustomText';
import RenderCellsPaciente from './components/RenderCellsPaciente';
import BackButton from '@/common/BackButton';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import { PsicologoModel } from '@/constants/models/PsicologoModel';

export default function HomePsciologoScreen() {
  const { usuarioLogado } = useUsuarioLogado();
  const psicologoLogado = usuarioLogado.usuarioLogadoData as PsicologoModel
  const id = psicologoLogado.idProfissional;

  return (
    <View style={HomeScreenStyle.container}>
      <BackButton /> 

      <CustomText label="Acompanhar pacientes" />  
      <CustomText label={`Codigo #${id}`} /> 
      <RenderCellsPaciente idPsicologoLogado={id}></RenderCellsPaciente>
    </View>
);
}
