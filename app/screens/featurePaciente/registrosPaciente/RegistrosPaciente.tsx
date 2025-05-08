import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Sidemenu from '../../Sidemenu';
import ContainerRegistro from './components/ContainerRegistro';
import Icon from 'react-native-vector-icons/AntDesign';
import { RelatoModal } from './components/RelatoModal';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { UsuarioLogado } from '@/constants/models/UsuarioLogado';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { PacienteModel } from '@/constants/models/PacienteModel';

type Props = {
  route: RouteProp<RootStackParamList, typeof ScreenRoutes.REGISTROS_PACIENTE>;
};

const registrosExemplo = [
  {
    id: '1',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste', 'Feliz', 'Surpreso'],
    status: 'Visualizado ✅',
    texto: 'Hoje me senti triste pela manhã e feliz à tarde.',
  },
  {
    id: '2',
    title: 'Registro',
    icon: '↗️',
    categories: ['Cansado', 'Desanimado'],
    status: 'Não Visualizado ❌',
    texto: 'O dia foi difícil, não consegui focar.',
  },
  {
    id: '3',
    title: 'Registro',
    icon: '↗️',
    categories: ['Feliz', 'Motivado'],
    status: 'Visualizado ✅',
    texto: 'Fiz todas as tarefas do dia e me senti motivado.',
  },
  {
    id: '4',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste'],
    status: 'Visualizado ✅',
    texto: 'Recebi uma notícia ruim no final do dia.',
  },
];

const categoriasExemplo = ['Triste', 'Feliz', 'Surpreso', 'Cansado', 'Desanimado', 'Motivado'];

const formatarData = (texto: string) => {
  let cleaned = texto.replace(/\D/g, '');
  if (cleaned.length > 8) {
    cleaned = cleaned.slice(0, 8);
  }
  if (cleaned.length >= 5) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
  } else if (cleaned.length >= 3) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  } else {
    return cleaned;
  }
};

const validarData = (dataTexto: string) => {
  const [dia, mes, ano] = dataTexto.split('/').map(Number);
  const data = new Date(ano, mes - 1, dia);
  if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) {
    return { valido: false, mensagem: 'Data inválida' };
  }
  const hoje = new Date();
  if (data > hoje) {
    return { valido: false, mensagem: 'Data no futuro' };
  }
  return { valido: true };
};

const validarIntervaloDatas = (dataInicioTexto: string, dataFimTexto: string) => {
  const [diaInicio, mesInicio, anoInicio] = dataInicioTexto.split('/').map(Number);
  const [diaFim, mesFim, anoFim] = dataFimTexto.split('/').map(Number);
  const dataInicio = new Date(anoInicio, mesInicio - 1, diaInicio);
  const dataFim = new Date(anoFim, mesFim - 1, diaFim);
  if (dataFim < dataInicio) {
    return { valido: false, mensagem: 'Data final é menor que a data inicial' };
  }
  return { valido: true , mensagem : 'Valido'};
};

const RegistrosPaciente: React.FC<Props> = ({ route }) => {
  // Extraia os parâmetros da rota
  const { usuario } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [visualizacao, setVisualizacao] = useState({
    visualizado: false,
    naoVisualizado: false,
  });
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [modalRelatoVisivel, setModalRelatoVisivel] = useState(false);
  const [registroSelecionado, setRegistroSelecionado] = useState<AnotacaoPacienteModel | null>(null);
  const [anotacoesPaciente, setAnotacoesPaciente] = useState<AnotacaoPacienteModel[]>([])

  const toggleVisualizacao = (tipo: keyof typeof visualizacao) => {
    setVisualizacao((prev) => ({
      ...prev,
      [tipo]: !prev[tipo],
    }));
  };

  const toggleCategoria = (categoria: string) => {
    if (categoriasSelecionadas.includes(categoria)) {
      setCategoriasSelecionadas(categoriasSelecionadas.filter((item) => item !== categoria));
    } else {
      setCategoriasSelecionadas([...categoriasSelecionadas, categoria]);
    }
  };

  const limparFiltros = () => {
    setVisualizacao({
      visualizado: false,
      naoVisualizado: false,
    });
    setCategoriasSelecionadas([]);
    setDataInicial('');
    setDataFinal('');
  };

  const salvarFiltros = () => {
    if (validarData(dataInicial).valido === false || validarData(dataFinal).valido === false) {
      Alert.alert('Datas inválidas!');
      setDataInicial('');
      setDataFinal('');
      return;
    }
    const intervaloValido = validarIntervaloDatas(dataInicial, dataFinal);
    if (!intervaloValido.valido) {
      Alert.alert(intervaloValido.mensagem);
      return;
    }
    setModalVisible(false);
  };

  const abrirRelato = (registro: AnotacaoPacienteModel) => {
    setRegistroSelecionado(registro);
    setModalRelatoVisivel(true);
  };

  const carregarDadosUsuario = async (usuarioPaciente: PacienteModel) =>{
    const registrosAnotacoes: AnotacaoPacienteModel[] = await AnotacaoProvider.obterListaAnotacoesPaciente(usuarioPaciente.idPaciente)

    return registrosAnotacoes;
  }

  useEffect(()=>{
    carregarDadosUsuario(usuario).then((res: AnotacaoPacienteModel[])=>{
      console.log("Resultado das anotacoes consultadas: ", res)
      setAnotacoesPaciente(res)
    })
  }, [usuario])

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.modalTitle}>Filtrar Anotações</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: 'absolute', right: 5, top: 5 }}>
                  <Icon name="close" size={20} color="grey" />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalSubtitle}>Data</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Data Inicial"
                  value={dataInicial}
                  onChangeText={(text) => setDataInicial(formatarData(text))}
                  placeholderTextColor="#aaa"
                  maxLength={10}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Data Final"
                  value={dataFinal}
                  onChangeText={(text) => setDataFinal(formatarData(text))}
                  placeholderTextColor="#aaa"
                  maxLength={10}
                />
              </View>
              <Text style={styles.modalSubtitle}>Visualização</Text>
              <Pressable style={styles.checkboxContainer} onPress={() => toggleVisualizacao('visualizado')}>
                <View style={styles.checkbox}>{visualizacao.visualizado && <View style={styles.checked} />}</View>
                <Text>Visualizado</Text>
              </Pressable>
              <Pressable style={styles.checkboxContainer} onPress={() => toggleVisualizacao('naoVisualizado')}>
                <View style={styles.checkbox}>{visualizacao.naoVisualizado && <View style={styles.checked} />}</View>
                <Text>Não Visualizado</Text>
              </Pressable>
              <Text style={styles.modalSubtitle}>Categorias</Text>
              {categoriasExemplo.map((categoria) => (
                <Pressable key={categoria} style={styles.checkboxContainer} onPress={() => toggleCategoria(categoria)}>
                  <View style={styles.checkbox}>
                    {categoriasSelecionadas.includes(categoria) && <View style={styles.checked} />}
                  </View>
                  <Text>{categoria}</Text>
                </Pressable>
              ))}
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.button} onPress={limparFiltros}>
                  <Text style={styles.buttonText}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={salvarFiltros}>
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <RelatoModal
        visivel={modalRelatoVisivel}
        fechar={() => setModalRelatoVisivel(false)}
        registro={registroSelecionado}
      />

      <View style={styles.titleText}>
        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Minhas Anotações</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: [{ translateY: -12 }],
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: '#20a69f', fontWeight: 'bold' }}>filtro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundRegistro}>
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          data={anotacoesPaciente}
          keyExtractor={(item) => String(item.idAnotacao)} 
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => abrirRelato(item)}>
              <ContainerRegistro
                title={item.titulo}
                categories={item.emocaoEstimada === null ? "" : item.emocaoEstimada}
                status={item.isVisualizada}
                date={item.dhRegistro.toString()}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>


      <View style={styles.menu}>
        <Sidemenu />
      </View>
    </View>
  );
};

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    height: heightScreen * 0.07,
    width: widthScreen,
    backgroundColor: '#20a69f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#20A69F',
  },
  backgroundRegistro: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e7e7e7',
  },
  scrollContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 60,
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#20a69f',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    color: '#333',
    width: '45%', // Ajuste a largura conforme necessário
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#20a69f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#20a69f',
  },
  modalButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#20a69f',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
  },
});

export default RegistrosPaciente;