import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PacienteRouteProp } from '@/constants/types/PacienteRouteProp';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import PacienteInfo from './componentes/PacienteInfo';
import RelatoItem from './componentes/RelatoItem';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';

const PerfilPacienteByPsciologoScreen = () => {
  const route = useRoute<PacienteRouteProp>();
  const pacienteInfo = route.params?.pacienteInfo;

  const [anotacoes, setAnotacoes] = useState<AnotacaoPacienteModel[]>(AnotacaoPacienteMockFactory.relatos)

  console.log(pacienteInfo, "informacoes do paciente")

  if (!pacienteInfo) {
    return (
      <View style={PerfilPacienteStyle.container}>
        <Text>Informações do paciente não disponíveis.</Text>
      </View>
    );
  }

  const buscarAnotacoesPacienteAtualSelecioando = (): void =>{
    const { idPaciente } = pacienteInfo
    AnotacaoProvider.obterListaAnotacoesPaciente(idPaciente).then((anotacoes)=>{
      console.log("anotacoes desse paciente: ", anotacoes)
      setAnotacoes(anotacoes)
    })
  }

  useEffect(()=>{
    buscarAnotacoesPacienteAtualSelecioando()
  },[pacienteInfo])

  return (
    <View style={PerfilPacienteStyle.container}>
      <PacienteInfo pacienteInfo={pacienteInfo} />
      <View style={PerfilPacienteStyle.reports}>
        <Text style={PerfilPacienteStyle.title}>Relatos</Text>
        <FlatList
          data={anotacoes}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => <RelatoItem anotacao={item} />}
        />
      </View>
    </View>
  );
};

;

export default PerfilPacienteByPsciologoScreen;
