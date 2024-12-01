import { AnotacaoPacienteMockFactory } from "@/constants/mock/AnotacaoPacienteMockFactory";
import { AnotacaoPacienteModel } from "@/constants/models/AnotacaoPacienteModel";
import { AnotacaoModalProps } from "@/constants/types/AnotacaoModalProps";
import { useEffect, useState } from "react";
import { Modal, View, Text,TextInput, TouchableOpacity , StyleSheet} from "react-native";

const AnotacaoModal = ({ visible, setVisibleFalseModal }: AnotacaoModalProps) =>{

  const [anotacaoAtual, setAnotacaoAtual] = useState<AnotacaoPacienteModel>(
    AnotacaoPacienteMockFactory.getAnotacaoPacienteInicialValues()
  );

  const [descricaoAnotacaoText, setDescricaoAnotacaoText] = useState('');

  const closeModal = () => {
    clearInputText()
    setVisibleFalseModal()
  };

  const clearInputText = (): void => {setDescricaoAnotacaoText('')}

  const handleSaveModal = () =>{
    
  };
  
  useEffect(()=>{
    //console.log("Valor atual descricaoAntaocao", descricaoAnotacaoText)
  },[descricaoAnotacaoText])


  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>O que você está pensando no momento?</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite aqui..."
              multiline
              value={descricaoAnotacaoText}
              onChangeText={setDescricaoAnotacaoText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveModal}>
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
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