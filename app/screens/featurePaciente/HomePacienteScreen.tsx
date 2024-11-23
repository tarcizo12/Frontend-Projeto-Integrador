import React, { useState } from 'react';
import { View, Dimensions, ScrollView, TouchableOpacity, Modal, Text, TextInput, StyleSheet } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import CustomAnotacaoCell from './componentes/CustomAnotacaoCell';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { AnotacaoModalProps } from '@/constants/types/AnotacaoModalProps'
import AddButton from '@/components/AddButton';
import AnotacaoModal from './componentes/AnotacaoModal';

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const MOCK_ANOTACOES: AnotacaoPacienteModel[] = AnotacaoPacienteMockFactory.criarListaMockAnotacoes();
  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  const renderCellsAnotacoes = (anotacoes: AnotacaoPacienteModel[]) => {
    return (
      <ScrollView>
        {anotacoes.map((anotacao) => (
          <CustomAnotacaoCell
            key={anotacao.getIdAnotacao()}
            anotacao={anotacao}
            onPress={() => console.log("TODO")}
          />
        ))}
      </ScrollView>
    );
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Minhas anotações" />
      <SearchBarPacientes placeholder="Buscar anotação"/>
      {renderCellsAnotacoes(MOCK_ANOTACOES)}
      <AddButton onPress={openModal} />
      <AnotacaoModal
        visible={modalVisible}
        onClose={closeModal}
        inputText={inputText}
        setInputText={setInputText}
      />
    </View>
  );
}



