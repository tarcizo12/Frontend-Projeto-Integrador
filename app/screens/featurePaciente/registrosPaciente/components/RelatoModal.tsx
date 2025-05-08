// components/RelatoModal.tsx
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface RelatoModalProps {
  visivel: boolean;
  fechar: () => void;
  registro: AnotacaoPacienteModel | null
}

export const RelatoModal: React.FC<RelatoModalProps> = ({ visivel, fechar, registro }) => {
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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  status: {
    color: 'gray',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 5,
    margin: 3,
  },
});
