import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import styles from '@/styles/RelatoModalStyle';
import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface RelatoModalProps {
  visivel: boolean;
  fechar: () => void;
  registro: AnotacaoPacienteModel | null
}
const RelatoModal: React.FC<RelatoModalProps> = ({ visivel, fechar, registro }) => {
  if (!registro) return null;

  return (
    <Modal animationType="slide" transparent={true} visible={visivel} onRequestClose={fechar}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity onPress={fechar} style={styles.closeButton}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{registro.titulo} </Text>
          <Text style={styles.status}>{registro.isVisualizada}</Text>
          <Text style={styles.texto}>{registro.descricao}</Text>
          <View style={styles.categoriesContainer}>
            <Text style={styles.category}>{registro.emocaoEstimada}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default RelatoModal;
