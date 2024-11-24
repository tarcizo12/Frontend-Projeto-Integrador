import React from 'react';
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { PacienteMockFactory } from '@/constants/mock/PacienteMockFactory';
import { PacienteModel } from '@/constants/models/PacienteModel';
import CustomPacienteCell from './CustomPacienteCell';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { PacienteInfo } from '@/constants/types/PacienteInfo';

const MOCK_PACIENTES: PacienteModel[] = PacienteMockFactory.criarListaMockPacientes()

export default function HomePsciologoScreen() {
  
  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();
  
  const handleDirecionarParaTelaDoPaciente = (props: PacienteInfo): void => {
    Navigation.navigate(ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO, { pacienteInfo: props });
  };

  const renderCellsPaciente = (pacientes: PacienteModel[]) => {
    return (
      <ScrollView>
        {pacientes.map((paciente) => (
          <CustomPacienteCell
            key={paciente.getIdPaciente()} 
            paciente={paciente}
            onPress={() =>
              handleDirecionarParaTelaDoPaciente({
                name: paciente.getNome(),
                photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                email: paciente.getEmail(),
              })
            }
          />
        ))}
      </ScrollView>
    );
  };
  
  

  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Acompanhar pacientes" />     
      <SearchBarPacientes placeholder={'Buscar paciente'} />  
      {renderCellsPaciente(MOCK_PACIENTES)}
    </View>
);
}
