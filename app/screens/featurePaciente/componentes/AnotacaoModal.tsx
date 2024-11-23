import { AnotacaoModalProps } from "@/constants/types/AnotacaoModalProps";
import { Modal, View, Text,TextInput, TouchableOpacity , StyleSheet} from "react-native";


const AnotacaoModal = ({ visible, onClose, inputText, setInputText }: AnotacaoModalProps) =>{
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>O que você está pensando no momento?</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui..."
              multiline
              value={inputText}
              onChangeText={setInputText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={onClose}>
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }


const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      elevation: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      height: 100,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    saveButton: {
      backgroundColor: '#6200EE',
      borderRadius: 10,
      padding: 10,
      flex: 1,
      marginRight: 10,
    },
    saveButtonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    closeButton: {
      backgroundColor: '#CCCCCC',
      borderRadius: 10,
      padding: 10,
      flex: 1,
    },
    closeButtonText: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
});

  
export default AnotacaoModal;