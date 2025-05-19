import React, { useState } from 'react';
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

const categoriasExemplo = ['Triste', 'Feliz', 'Surpreso', 'Cansado', 'Desanimado', 'Motivado'];

const RegistrosPaciente: React.FC<RegistrosPacientesProps> = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { usuarioLogado } = useUsuarioLogado();
  const [visualizacao, setVisualizacao] = useState({
    visualizado: false,
    naoVisualizado: false,
  });
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [modalRelatoVisivel, setModalRelatoVisivel] = useState(false);
  const [registroSelecionado, setRegistroSelecionado] = useState<AnotacaoPacienteModel | null>(null);
  const [anotacoesPaciente, setAnotacoesPaciente] = useState<AnotacaoPacienteModel[]>([]);

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
    if (
      DateUtil.validarData(dataInicial).valido === false ||
      DateUtil.validarData(dataFinal).valido === false
    ) {
      Alert.alert('Datas inválidas!');
      setDataInicial('');
      setDataFinal('');
      return;
    }
    const intervaloValido = DateUtil.validarIntervaloDatas(dataInicial, dataFinal);
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

  const carregarDadosUsuario = async (usuarioPaciente: PacienteModel) => {
    const registrosAnotacoes: AnotacaoPacienteModel[] = await AnotacaoProvider.obterListaAnotacoesPaciente(
      usuarioPaciente.idPaciente
    );
    return registrosAnotacoes;
  };

  useFocusEffect(
    React.useCallback(() => {
      const paciente: PacienteModel = usuarioLogado.usuarioLogadoData as PacienteModel;
      if (paciente) {
        carregarDadosUsuario(paciente).then((res: AnotacaoPacienteModel[]) => {
          console.log('Resultado das anotacoes consultadas: ', res);
          setAnotacoesPaciente(res);
        });
      } else {
        setAnotacoesPaciente([]);
      }
    }, [usuarioLogado])
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.modalTitle}>Filtrar Anotações</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{ position: 'absolute', right: 5, top: 5 }}
                >
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
              <Pressable
                style={styles.checkboxContainer}
                onPress={() => toggleVisualizacao('visualizado')}
              >
                <View style={styles.checkbox}>{visualizacao.visualizado && <View style={styles.checked} />}</View>
                <Text>Visualizado</Text>
              </Pressable>
              <Pressable
                style={styles.checkboxContainer}
                onPress={() => toggleVisualizacao('naoVisualizado')}
              >
                <View style={styles.checkbox}>
                  {visualizacao.naoVisualizado && <View style={styles.checked} />}
                </View>
                <Text>Não Visualizado</Text>
              </Pressable>
              <Text style={styles.modalSubtitle}>Categorias</Text>
              {categoriasExemplo.map((categoria) => (
                <Pressable
                  key={categoria}
                  style={styles.checkboxContainer}
                  onPress={() => toggleCategoria(categoria)}
                >
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
        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>
          Minhas Anotações
        </Text>
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
                categories={item.emocaoEstimada === null ? '' : item.emocaoEstimada}
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

export default RegistrosPaciente;
