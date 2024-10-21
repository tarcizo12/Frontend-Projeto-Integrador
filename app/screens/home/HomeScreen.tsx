import React from 'react';
import { View } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';

export default function HomeScreen() {
  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDirecionarParaTelaPsicologo = (): void => {
    Navigation.navigate('Psicologo');

  };

  const handleDirecionarParaTelaPaciente = (): void => {
    alert('Implementar navegacao para tela do paciente');
  };

  return (
    <View style={HomeScreenStyle.container}>
      <View style={HomeScreenStyle.titleContainer}>
        <CustomText label="Projeto Integrador" />
      </View>
      <View style={HomeScreenStyle.buttonContainer}>
        <CustomButton label="Ir para tela de paciente" func={handleDirecionarParaTelaPaciente} />
        <CustomButton label="Ir para tela do psicólogo" func={handleDirecionarParaTelaPsicologo} />
      </View>
    </View>
  );
}

