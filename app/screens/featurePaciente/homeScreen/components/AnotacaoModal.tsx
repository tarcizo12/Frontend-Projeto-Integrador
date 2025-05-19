import AnotacaoProvider from "@/app/provider/AnotacaoProvider";
import { AnotacaoPacienteMockFactory } from "@/constants/mock/AnotacaoPacienteMockFactory";
import { AnotacaoPacienteModel } from "@/constants/models/AnotacaoPacienteModel";
import { AnotacaoModalProps } from "@/constants/types/AnotacaoModalProps";
import styles from "@/styles/AnotacaoModalStyle";
import { useEffect, useState } from "react";
import { Modal, View, Text,TextInput, TouchableOpacity , StyleSheet} from "react-native";

const AnotacaoModal = ({ visible, idPaciente ,setVisibleFalseModal  }: AnotacaoModalProps) =>{

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
    const novaAnotacaoSalvar: AnotacaoPacienteModel = AnotacaoPacienteModel.copy(anotacaoAtual)
    complementarInformacoesNovaAnotacao(novaAnotacaoSalvar)
    AnotacaoProvider.salvarNovaAnotacao(novaAnotacaoSalvar).finally(()=> closeModal())
  };

  const complementarInformacoesNovaAnotacao = (novaAnotacaoSalvar: AnotacaoPacienteModel): void=>{
    novaAnotacaoSalvar._fk_idPaciente = idPaciente
    novaAnotacaoSalvar.descricao =  descricaoAnotacaoText
    novaAnotacaoSalvar.dhRegistro =  new Date()
  }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Como você está se sentindo?</Text>
            <TextInput
              style={styles.input}
              placeholder="Escreva aqui como foi seu dia, como se sentiu, ou qualquer coisa que queira lembrar..."
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
  

export default AnotacaoModal;