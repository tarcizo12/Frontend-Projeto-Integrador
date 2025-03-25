import React from 'react';
import { View } from 'react-native';
import ScreenRoutes from '@/constants/ScreenRoutes';
import CustomButton from '@/common/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';

export default function HomeScreen() {
  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDirecionarParaTelaPsicologo = (): void => {
    Navigation.navigate(ScreenRoutes.HOME_PSICOLOGO_SCREEN);
  };

  const handleDirecionarParaTelaPaciente = (): void => {
    Navigation.navigate(ScreenRoutes.HOME_PACIENTE_SCREEN);
  };

  return (
    <View >
      <View>
        <CustomButton label="Ir para tela de paciente" func={handleDirecionarParaTelaPaciente} />
        <CustomButton label="Ir para tela do psicólogo" func={handleDirecionarParaTelaPsicologo} />
      </View>
    </View>
  );
}

