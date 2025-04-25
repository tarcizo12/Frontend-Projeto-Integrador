import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/common/AddButton';
import AnotacaoModal from './components/AnotacaoModal';
import RenderCellsAnotacoes from './components/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import Sidemenu from '../../Sidemenu';

const ID_PACIENTE_MOCK = 1;
const MOCK_ANOTACOES: AnotacaoPacienteModel[] =
  AnotacaoPacienteMockFactory.criarListaMockAnotacoes();

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listaAnotacoesAtual, setListaAnotacoesAtual] = useState<AnotacaoPacienteModel[]>([]);
  const [descricaoAnotacaoText, setDescricaoAnotacaoText] = useState('');
  const [tituloAnotacaoText, setTituloAnotacaoText] = useState('');
  const [emojiSelecionado, setEmojiSelecionado] = useState<string | null>(null);

  const atualizaListaAnotacoes = (): void => {
    AnotacaoProvider.obterListaAnotacoesPaciente(ID_PACIENTE_MOCK).then(
      (res: AnotacaoPacienteModel[]) => {
        setListaAnotacoesAtual(res);
      },
    );
  };

  useEffect(() => {
    if (!modalVisible) {
      atualizaListaAnotacoes();
    }
  }, [modalVisible]);

  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Nova anotação</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 16, marginLeft: 16, marginBottom: 8 }}>
          Como você está se sentindo?
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Este espaço é seu: escreva sobre algo que viveu e como isso te fez sentir..."
          multiline
          scrollEnabled
          value={descricaoAnotacaoText}
          onChangeText={setDescricaoAnotacaoText}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.titleContainer}>
        <View style={styles.textTitleContainer}>
          <Text>Titulo</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', borderBlockColor: 'black', borderRadius: }}>
          <TextInput
            style={styles.titleTextInput}
            placeholder="Digite o título da anotação"
            value={tituloAnotacaoText}
            onChangeText={setTituloAnotacaoText}
            scrollEnabled
            multiline={false}
            textAlignVertical="center"
            textAlign="left"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text style={{ fontSize: 16}}>
            Gerar titulo automaticamente
          </Text>
        </View>
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Text style={styles.addButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <RenderCellsAnotacoes anotacoes={listaAnotacoesAtual} />

      <AnotacaoModal
        idPaciente={ID_PACIENTE_MOCK}
        visible={modalVisible}
        setVisibleFalseModal={() => setModalVisible(false)}
      />

      <Sidemenu />
    </View>
  );
}

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: widthScreen,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20A69F',
    width: widthScreen,
    height: heightScreen * 0.07,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    width: widthScreen * 0.9,
    height: heightScreen * 0.3,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  textInput: {
    width: '100%',
    height: '80%',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
  },
  titleContainer: {
    backgroundColor: '#ffffff',
    width: widthScreen * 0.9,
    height: heightScreen * 0.18,
    marginTop: 20,
    padding: 10,
  },
  textTitleContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleTextInput: {
    width: '100%',
    height: '60%',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
  },
  addButton: {
    backgroundColor: '#20A69F',
    width: widthScreen * 0.25,
    height: heightScreen * 0.05,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
