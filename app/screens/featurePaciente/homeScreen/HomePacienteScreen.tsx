import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/common/CustomText';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import SearchBarPacientes from '@/common/SearchBarPacientes';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/common/AddButton';
import AnotacaoModal from './components/AnotacaoModal';
import RenderCellsAnotacoes from './components/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import BackButton from '@/common/BackButton'; // Importe o BackButton
import { StyleSheet } from 'react-native';

// Importe suas imagens
import Icon1 from '@/icons/calendar.png'; // Imagem da primeira opção
import Icon2 from '@/icons/notes.png'; // Imagem da segunda opção
import Icon3 from '@/icons/add.png'; // Imagem da terceira opção
import Icon4 from '@/icons/person.png'; // Imagem da quarta opção

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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={PerfilPacienteStyle.scrollContainer}>
        <View style={HomeScreenStyle.container}>
          <CustomText label="Minhas anotações" />
          <BackButton /> {/* Remover esse componente na versão final */}
          <AddButton onPress={() => setModalVisible(true)} />
          <SearchBarPacientes placeholder="Buscar anotação" />
          <RenderCellsAnotacoes anotacoes={listaAnotacoesAtual} />
          <AnotacaoModal idPaciente={ID_PACIENTE_MOCK} visible={modalVisible} setVisibleFalseModal={() => setModalVisible(false)} />
        </View>
      </ScrollView>

      {/* Menu inferior com imagens */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuOption}>
          <Image source={Icon1} style={styles.menuImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOption}>
          <Image source={Icon2} style={styles.menuImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOption}>
          <Image source={Icon3} style={styles.menuImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOption}>
          <Image source={Icon4} style={styles.menuImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',  // Cor de fundo do menu
    borderTopWidth: 1,
    borderTopColor: '#20A69F', // Cor de borda superior do menu
  },
  menuOption: {
    padding: 10,
    alignItems: 'center',
  },
  menuImage: {
    width: 30,  // Ajuste o tamanho das imagens conforme necessário
    height: 30, // Ajuste o tamanho das imagens conforme necessário
    resizeMode: 'contain',  // Garante que a imagem não distorça
  },
});
