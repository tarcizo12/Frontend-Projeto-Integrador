import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/common/AddButton';
import AnotacaoModal from './components/AnotacaoModal';
import RenderCellsAnotacoes from './components/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import Icon1 from '@/icons/calendar.png';
import Icon2 from '@/icons/notes.png';
import Icon3 from '@/icons/add.png';
import Icon4 from '@/icons/person.png';
import BackButton from '@/common/BackButton';

const ID_PACIENTE_MOCK = 1;
const MOCK_ANOTACOES: AnotacaoPacienteModel[] =
  AnotacaoPacienteMockFactory.criarListaMockAnotacoes();

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listaAnotacoesAtual, setListaAnotacoesAtual] = useState<AnotacaoPacienteModel[]>([]);
  const [descricaoAnotacaoText, setDescricaoAnotacaoText] = useState('');
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
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.backButton}>
            <Text style={styles.backButtonText}>{'<'} </Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nova anotação</Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 16,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.inputContainer}>
            <Text style={{ fontSize: 16, marginLeft: 16, marginBottom: 8 }}>
              Como você está se sentindo?
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
  {['😊', '😢', '😠', '😴', '😰'].map((emoji) => {
    const selecionado = emoji === emojiSelecionado;
    return (
      <TouchableOpacity
        key={emoji}
        onPress={() => {
          if (selecionado) {
            setEmojiSelecionado(null);
          } else {
            setEmojiSelecionado(emoji);
          }
        }}
        style={{
          margin: 6,
          padding: 6,
          borderRadius: 8,
          backgroundColor: selecionado ? '#a0ff7d' : '#eee',
          borderWidth: selecionado ? 2 : 1,
          borderColor: selecionado ? '#20A69F' : '#ccc',
        }}
      >
        <Text style={{ fontSize: 24 }}>{emoji}</Text>
      </TouchableOpacity>
    );
  })}
</View>


            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Este espaço é seu: escreva sobre algo que viveu e como isso te fez sentir..."
                multiline
                value={descricaoAnotacaoText}
                onChangeText={setDescricaoAnotacaoText}
                textAlignVertical="top"
              />
            </View>
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
      </ScrollView>

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
  scrollContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#20A69F',
    width: '100%',
    height: 60,
    marginBottom: 150,
  },
  backButton: {
    backgroundColor: '#a0ff7d',
    borderRadius: 25,
    width: '10%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  backButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    width: '90%',
    height: 400,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
  },
  addButton: {
    backgroundColor: '#20A69F',
    width: '40%',
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#20A69F',
    width: '100%',
    height: '7%',
  },
  menuOption: {
    padding: 10,
    alignItems: 'center',
  },
  menuImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  textInput: {
    width: 300,
    height: 150,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});
