import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { PacienteMockFactory } from '@/constants/mock/PacienteMockFactory';
import { PacienteModel } from '@/constants/models/PacienteModel';
import CustomPacienteCell from './CustomPacienteCell';

export default function HomePsciologoScreen() {

  const mockPacientes: PacienteModel[] = PacienteMockFactory.criarListaMockPacientes()

  const renderCellsPaciente = (pacientes: PacienteModel[]) => {
    return (
      <>
        {pacientes.map((paciente) => (
          <CustomPacienteCell 
            key={paciente.getIdPaciente()}
            nome={paciente.getNome()} dataNascimento={paciente.getDataNascimento().toString()}
            onPress={ ()=> alert(`Paciente selecionado: ${paciente.getNome()}`)}>
          </CustomPacienteCell>
        ))}
      </>
    );
  };
  

  return (
    <View style={HomeScreenStyle.container}>
      <View>
        <CustomText label={"Implementacao para tela de psicologo"}></CustomText>
          {renderCellsPaciente(mockPacientes)}
      </View>
    </View>
  );
}
