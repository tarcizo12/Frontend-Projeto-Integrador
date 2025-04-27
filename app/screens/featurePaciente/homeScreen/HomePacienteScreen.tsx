import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import RenderCellsAnotacoes from './components/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import Sidemenu from '../../Sidemenu';

const ID_PACIENTE_MOCK = 1;

export default function HomePacienteScreen() {
  const [descricaoAnotacaoText, setDescricaoAnotacaoText] = useState('');
  const [tituloAnotacaoText, setTituloAnotacaoText] = useState('');

  // TODO: Finalizar a implementação da criação de anotações
  const adicionarAnotacao = async () => {
    const novaAnotacao = new AnotacaoPacienteModel(
      AnotacaoPacienteMockFactory.getAnotacaoPacienteInicialValues().idAnotacao,
      descricaoAnotacaoText,
      new Date(),
      ID_PACIENTE_MOCK,
      null,
    );
    try {
      const idAnotacao = await AnotacaoProvider.salvarNovaAnotacao(novaAnotacao);
      console.log('Anotação salva com sucesso! ID:', idAnotacao);
      setDescricaoAnotacaoText('');
      setTituloAnotacaoText('');
    } catch (error) {
      console.error('Erro ao salvar anotação:', error);
    }
  };
  // TODO: Adicionar o método para gerar o título com IA
  // const gerarTituloComIA = async () => {
  //   const response = await AnotacaoProvider.gerarTituloComIA(descricaoAnotacaoText);
  //   if (response) {
  //     setTituloAnotacaoText(response);
  //   } else {
  //     console.error('Erro ao gerar título com IA');
  //   }
  // };

  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Nova anotação</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 16, marginBottom: 8 }}>
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
        <View style={styles.headerTitleContainer}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Título</Text>
        </View>
        <View style={styles.textTitleContainer}>
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
        <View style={styles.gernerateTitleContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ fontSize: 16 }}>Gerar com IA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={adicionarAnotacao}>
          <Text style={styles.addButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

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
    justifyContent: 'space-between',
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
    width: widthScreen * 0.95,
    height: heightScreen * 0.18,
    marginTop: 20,
    padding: 10,
  },
  textTitleContainer: {
    width: '100%',
    height: '30%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleContainer: {
    width: '100%',
    height: '20%',
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  gernerateTitleContainer: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleTextInput: {
    width: '100%',
    height: '60%',
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
