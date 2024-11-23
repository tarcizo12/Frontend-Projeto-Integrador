import React from 'react';
import { View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { PacienteModel } from '@/constants/models/PacienteModel';
import CustomAnotacaoCell from './CustomAnotacaoCell';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import { RootStackParamList } from '../featurePsicologo/HomePsciologoScreen';

export default function HomePacienteScreen() {
  
  const { width } = Dimensions.get('window');
  const MOCK_ANOTACOES: AnotacaoPacienteModel[] = AnotacaoPacienteMockFactory.criarListaMockAnotacoes()

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

  //TODO
  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();
  


  const renderCellsAnotacoes = (anotacoes: AnotacaoPacienteModel[]) => {
    return (
      <ScrollView>
        {anotacoes.map((anotacao) => (
          <CustomAnotacaoCell
            key={anotacao.getIdAnotacao()} 
            anotacao={anotacao}
            onPress={() =>console.log("TODO")}
          />
        ))}
      </ScrollView>
    );
  };
  
  

  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Minhas anotações" />     
      <SearchBarPacientes placeholder={'Buscar anotacao'} style={stylesSearchBar}/>  
      {renderCellsAnotacoes(MOCK_ANOTACOES)}
    </View>
);
}
