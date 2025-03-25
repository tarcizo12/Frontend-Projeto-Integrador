import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/common/CustomText';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import SearchBarPacientes from '@/common/SearchBarPacientes';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/common/AddButton';
import AnotacaoModal from './components/AnotacaoModal';
import RenderCellsAnotacoes from './components/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { ScrollView } from 'react-native';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import BackButton from '@/common/BackButton'; // Importe o BackButton
import { StyleSheet } from 'react-native';

const ID_PACIENTE_MOCK = 1;
const MOCK_ANOTACOES: AnotacaoPacienteModel[] = AnotacaoPacienteMockFactory.criarListaMockAnotacoes();

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listaAnotacoesAtual, setListaAnotacoesAtual] = useState<AnotacaoPacienteModel[]>([]);

  const atualizaListaAnotacoes = (): void => {
    AnotacaoProvider.obterListaAnotacoesPaciente(ID_PACIENTE_MOCK).then((res: AnotacaoPacienteModel[]) => {
      setListaAnotacoesAtual(res);
    });
  };

  useEffect(() => { if (!modalVisible) { atualizaListaAnotacoes(); } }, [modalVisible]);

  return (
    <ScrollView contentContainerStyle={PerfilPacienteStyle.scrollContainer}>
      <View style={HomeScreenStyle.container}>
        <CustomText label="Minhas anotações" />
        <BackButton /> {/*Remover esse componente na versao final*/}
        <AddButton onPress={() => setModalVisible(true)} />
        <SearchBarPacientes placeholder="Buscar anotação"/>
        <RenderCellsAnotacoes anotacoes={listaAnotacoesAtual}></RenderCellsAnotacoes>
        <AnotacaoModal idPaciente={ID_PACIENTE_MOCK} visible={modalVisible} setVisibleFalseModal={() => setModalVisible(false)} />
      </View>
    </ScrollView>
  );
}

