import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Sidemenu from '../../Sidemenu';
import ContainerRegistro from './components/ContainerRegistro';
import Icon from 'react-native-vector-icons/AntDesign';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { PacienteModel } from '@/constants/models/PacienteModel';
import RelatoModal from './components/RelatoModal';
import RegistrosPacientesProps from '@/constants/models/RegistrosPacientesProps';
import { DateUtil } from '@/util/DateUtil';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import styles from '@/styles/RegistrosPacienteStyle';

const RegistrosPaciente: React.FC<RegistrosPacientesProps> = ({ route }) => {
  const { usuarioLogado } = useUsuarioLogado();

  const [modalVisible, setModalVisible] = useState(false);
  const [visualizacao, setVisualizacao] = useState({ visualizado: false, naoVisualizado: false });
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [modalRelatoVisivel, setModalRelatoVisivel] = useState(false);
  const [registroSelecionado, setRegistroSelecionado] = useState<AnotacaoPacienteModel | null>(null);
  const [anotacoesPaciente, setAnotacoesPaciente] = useState<AnotacaoPacienteModel[]>([]);
  const [anotacoesFiltradas, setAnotacoesFiltradas] = useState<AnotacaoPacienteModel[]>([]);

  const toggleVisualizacao = (tipo: keyof typeof visualizacao) => {
    setVisualizacao((prev) => ({ ...prev, [tipo]: !prev[tipo] }));
  };

  const toggleCategoria = (categoria: string) => {
    setCategoriasSelecionadas((prev) =>
      prev.includes(categoria) ? prev.filter((c) => c !== categoria) : [...prev, categoria]
    );
  };

  const limparFiltros = () => {
    setVisualizacao({ visualizado: false, naoVisualizado: false });
    setCategoriasSelecionadas([]);
    setDataInicial('');
    setDataFinal('');
    setAnotacoesFiltradas(anotacoesPaciente); 
  };

const salvarFiltros = () => {
  let dataIniDate: Date | null = null;
  let dataFimDate: Date | null = null;

  // Validação condicional
  if (dataInicial) {
    const dataIni = DateUtil.validarData(dataInicial);
    if (!dataIni.valido) {
      Alert.alert('Data inicial inválida!');
      return;
    }
    dataIniDate = new Date(dataInicial);
  }

  if (dataFinal) {
    const dataFim = DateUtil.validarData(dataFinal);
    if (!dataFim.valido) {
      Alert.alert('Data final inválida!');
      return;
    }
    dataFimDate = new Date(dataFinal);
  }

  if (dataIniDate && dataFimDate) {
    const intervalo = DateUtil.validarIntervaloDatas(dataInicial, dataFinal);
    if (!intervalo.valido) {
      Alert.alert(intervalo.mensagem);
      return;
    }
  }

  const filtradas = anotacoesPaciente.filter((anotacao) => {
    // Filtro por período, apenas se datas foram informadas
    const dentroDoPeriodo =
      (!dataIniDate || anotacao.dhRegistro >= dataIniDate) &&
      (!dataFimDate || anotacao.dhRegistro <= dataFimDate);

    const categoriaValida =
      categoriasSelecionadas.length === 0 ||
      (anotacao.emocaoEstimada && categoriasSelecionadas.includes(anotacao.emocaoEstimada));

    const statusValido =
      (!visualizacao.visualizado && !visualizacao.naoVisualizado) ||
      (visualizacao.visualizado && anotacao.isVisualizada) ||
      (visualizacao.naoVisualizado && !anotacao.isVisualizada);

    return dentroDoPeriodo && categoriaValida && statusValido;
  });

  setAnotacoesFiltradas(filtradas);
  setModalVisible(false);
};


  enum EMOCOES  {
    EMPOLGACAO = "Empolgacao",
    EXCITACAO = "Excitacao",
    FELICIDADE = "Felicidade",
    TRISTEZA = "Tristeza",
    RAIVA = "Raiva",
    MEDO = "Medo",
    SURPRESA = "Surpresa",
    ENTUSIASMO = "Entusiasmo"
}


  const abrirRelato = (registro: AnotacaoPacienteModel) => {
    setRegistroSelecionado(registro);
    setModalRelatoVisivel(true);
  };

  const carregarDadosUsuario = async (usuarioPaciente: PacienteModel) => {
    const registros = await AnotacaoProvider.obterListaAnotacoesPaciente(usuarioPaciente.idPaciente);
    setAnotacoesPaciente(registros);
    setAnotacoesFiltradas(registros); // inicializa com todas
  };

  useFocusEffect(
    useCallback(() => {
      const paciente: PacienteModel = usuarioLogado.usuarioLogadoData as PacienteModel;
      if (paciente) carregarDadosUsuario(paciente);
    }, [usuarioLogado])
  );

  return (
    <View style={styles.container}>
      {/* Modal de Filtro */}
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
                  onChangeText={(text) => setDataInicial(DateUtil.formatarData(text))}
                  placeholderTextColor="#aaa"
                  maxLength={10}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Data Final"
                  value={dataFinal}
                  onChangeText={(text) => setDataFinal(DateUtil.formatarData(text))}
                  placeholderTextColor="#aaa"
                  maxLength={10}
                />
              </View>

              <Text style={styles.modalSubtitle}>Visualização</Text>
              {['visualizado', 'naoVisualizado'].map((tipo) => (
                <Pressable key={tipo} style={styles.checkboxContainer} onPress={() => toggleVisualizacao(tipo as any)}>
                  <View style={styles.checkbox}>
                    {visualizacao[tipo as keyof typeof visualizacao] && <View style={styles.checked} />}
                  </View>
                  <Text>{tipo === 'visualizado' ? 'Visualizado' : 'Não Visualizado'}</Text>
                </Pressable>
              ))}

              <Text style={styles.modalSubtitle}>Categorias</Text>
              {Object.values(EMOCOES).map((categoria) => (
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

      {/* Modal de Relato */}
      <RelatoModal visivel={modalRelatoVisivel} fechar={() => setModalRelatoVisivel(false)} registro={registroSelecionado} />

      {/* Header */}
      <View style={styles.titleText}>
        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Minhas Anotações</Text>
        <TouchableOpacity
          style={{ position: 'absolute', right: 10, top: '50%', transform: [{ translateY: -12 }], backgroundColor: '#fff', padding: 10, borderRadius: 5 }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: '#20a69f', fontWeight: 'bold' }}>filtro</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Registros */}
      <View style={styles.backgroundRegistro}>
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          data={anotacoesFiltradas}
          keyExtractor={(item) => String(item.idAnotacao)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => abrirRelato(item)}>
              <ContainerRegistro
                title={item.titulo}
                categories={item.emocaoEstimada || ''}
                status={item.isVisualizada}
                date={item.dhRegistro.toString()}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <Sidemenu />
      </View>
    </View>
  );
};

export default RegistrosPaciente;
