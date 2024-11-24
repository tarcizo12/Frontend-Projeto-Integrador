import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PacienteRouteProp } from '@/constants/types/PacienteRouteProp';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import PacienteInfo from './componentes/PacienteInfo';
import RelatoItem from './componentes/RelatoItem';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';

const PerfilPacienteByPsciologoScreen = () => {
  const route = useRoute<PacienteRouteProp>();
  const pacienteInfo = route.params?.pacienteInfo;

  if (!pacienteInfo) {
    return (
      <View style={PerfilPacienteStyle.container}>
        <Text>Informações do paciente não disponíveis.</Text>
      </View>
    );
  }

  return (
    <View style={PerfilPacienteStyle.container}>
      <PacienteInfo pacienteInfo={pacienteInfo} />
      <View style={PerfilPacienteStyle.reports}>
        <Text style={PerfilPacienteStyle.title}>Relatos</Text>
        <FlatList
          data={AnotacaoPacienteMockFactory.relatos}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RelatoItem relato={item} />}
        />
      </View>
    </View>
  );
};

;

export default PerfilPacienteByPsciologoScreen;
