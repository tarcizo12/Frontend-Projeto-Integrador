// components/RelatoModal.tsx
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface RelatoModalProps {
  visivel: boolean;
  fechar: () => void;
  registro: {
    id: string;
    title: string;
    icon: string;
    categories: string[];
    status: string;
    texto: string;
  } | null;
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
          <Text style={styles.title}>{registro.title} {registro.icon}</Text>
          <Text style={styles.status}>{registro.status}</Text>
          <Text style={styles.texto}>{registro.texto}</Text>
          <View style={styles.categoriesContainer}>
            {registro.categories.map((cat) => (
              <Text key={cat} style={styles.category}>{cat}</Text>
            ))}
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
