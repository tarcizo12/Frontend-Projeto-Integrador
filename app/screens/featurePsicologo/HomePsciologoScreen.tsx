import React from 'react';
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { PacienteMockFactory } from '@/constants/mock/PacienteMockFactory';
import { PacienteModel } from '@/constants/models/PacienteModel';
import CustomPacienteCell from './CustomPacienteCell';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type PacienteInfo = {
  name: string;
  photo: string;
  email: string;
};

export type RootStackParamList = {
  Home: undefined;
  Paciente: { pacienteInfo: PacienteInfo } | undefined;
};

const MOCK_PACIENTES: PacienteModel[] = PacienteMockFactory.criarListaMockPacientes()

export default function HomePsciologoScreen() {
  
  const { width } = Dimensions.get('window');

  const stylesSearchBar = {
    input: {
      backgroundColor: '#F6F7FB',
      borderRadius: 30,
    },

    container: {
      width: width * 0.94,
      backgroundColor: '#ffffff0',
      borderBottomWidth: 0,
      borderTopWidth: 0,    
    },

    inputStyle: {
      color: '#000000',
    },
  };

  
  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();
  
  const handleDirecionarParaTelaDoPaciente = (props: PacienteInfo): void => {
    Navigation.navigate('Paciente', { pacienteInfo: props });
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
      <SearchBarPacientes placeholder={'Buscar paciente'} style={stylesSearchBar}/>  
      {renderCellsPaciente(MOCK_PACIENTES)}
    </View>
);
}
