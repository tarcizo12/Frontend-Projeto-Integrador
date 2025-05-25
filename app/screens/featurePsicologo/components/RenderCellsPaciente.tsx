import { RenderCellsPacienteProps } from '@/constants/types/RenderCellsPacienteProps';
import { ScrollView, Alert, Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PacienteInfo } from '@/constants/types/PacienteInfo';
import { useEffect, useState } from 'react';
import { PacienteModel } from '@/constants/models/PacienteModel';
import PacienteProvider from '@/app/provider/PacienteProvider';
import { PacienteMockFactory } from '@/constants/mock/PacienteMockFactory';
import CustomPacienteCell from './CustomPacienteCell';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { useLoading } from '@/hooks/LoadingContext';

const RenderCellsPaciente = ({ idPsicologoLogado }: RenderCellsPacienteProps) => {
  const [listaPacientesAtual, setListaPacientesAtual] = useState<PacienteModel[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState<PacienteModel | null>(null);
  const [textoModalDescricaoSemanal, setModalDescricaoSemanal] = useState<string>('')
  const Navigation: NavigationProp<RootStackParamList> = useNavigation();
  const { showLoading , hideLoading } = useLoading()

  const handleDirecionarParaTelaDoPaciente = (props: PacienteInfo): void => {
    Navigation.navigate(ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO, { pacienteInfo: props });
  };

  const handleClickGerarResumoSemanal = (paciente: PacienteModel) =>{
    showLoading()
    AnotacaoProvider.obterResumoDescricaoSemanal(paciente.idPaciente).then((resultado)=>{
        setModalDescricaoSemanal(resultado)
        setPacienteSelecionado(paciente);
        setModalVisible(true);
    }).catch(()=>{
      console.error("Falha ao gera resumo. Tenta novamente mais tarde")
    }).finally(()=>{
        hideLoading()
    })
  }

  const handleLongPressPaciente = (paciente: PacienteModel) => {
    Alert.alert(
      'Resumo Semanal',
      'Deseja gerar resumo semanal do paciente?',
      [
        {
          text: 'Agora não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => handleClickGerarResumoSemanal(paciente),
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    PacienteProvider.obsterListaPacientesByPsicolog(idPsicologoLogado).then((pacientes: PacienteModel[]) => {
      setListaPacientesAtual(pacientes);
    });
  }, []);

  return (
    <>
      <ScrollView>
        {listaPacientesAtual.map((paciente) => (
          <CustomPacienteCell
            key={paciente.idPaciente}
            paciente={paciente}
            onPress={() =>
              handleDirecionarParaTelaDoPaciente({
                name: paciente.nome,
                email: paciente.email,
                idPaciente: paciente.idPaciente,
              })
            }
            onLongPress={() => handleLongPressPaciente(paciente)}
          />
        ))}
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Resumo Semanal</Text>
            
            <ScrollView>
              <Text style={styles.modalLabel}>
                {pacienteSelecionado ? textoModalDescricaoSemanal : ''}
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '85%',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#6495ed',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RenderCellsPaciente;
