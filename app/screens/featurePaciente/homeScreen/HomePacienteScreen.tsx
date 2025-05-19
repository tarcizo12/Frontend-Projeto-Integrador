import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import Sidemenu from '../../Sidemenu';
import styles from '@/styles/HomePacienteScreenStyle';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import { useLoading } from '@/hooks/LoadingContext';
import { PacienteModel } from '@/constants/models/PacienteModel';

export default function HomePacienteScreen() {
  const [descricaoAnotacaoText, setDescricaoAnotacaoText] = useState('');
  const [tituloAnotacaoText, setTituloAnotacaoText] = useState('');
  const { usuarioLogado } = useUsuarioLogado();
  
  const { showLoading, hideLoading } = useLoading();

  const adicionarAnotacao = async () => {
    const novaAnotacao = new AnotacaoPacienteModel();
    const paciente: PacienteModel = usuarioLogado.usuarioLogadoData as PacienteModel

    novaAnotacao.descricao = descricaoAnotacaoText
    novaAnotacao._fk_idPaciente = paciente.idPaciente

    try {
      console.log("Salvando anotacao... " , novaAnotacao)

      showLoading()
      AnotacaoProvider.salvarNovaAnotacao(novaAnotacao).then((idAnotacao)=>{
        console.log('Anotação salva com sucesso! ID:', idAnotacao);
      }).catch((erro)=>{
        console.error("Falha ao salvar nova anotacao, ", erro)
      }).finally(()=>{
        setDescricaoAnotacaoText('');
        setTituloAnotacaoText('');
        hideLoading()
      });
      
    } catch (error) {
      console.error('Erro ao salvar anotação:', error);
    }
  };


  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Nova anotação</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 16, marginBottom: 8 }}>
          Como você está se sentindo?
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Este espaço é seu: escreva sobre algo que viveu e como isso te fez sentir..."
          multiline
          scrollEnabled
          value={descricaoAnotacaoText}
          onChangeText={setDescricaoAnotacaoText}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.titleContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Título</Text>
        </View>
        <View style={styles.textTitleContainer}>
          <TextInput
            style={styles.titleTextInput}
            placeholder="Digite o título da anotação"
            value={tituloAnotacaoText}
            onChangeText={setTituloAnotacaoText}
            scrollEnabled
            multiline={false}
            textAlignVertical="center"
            textAlign="left"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.gernerateTitleContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ fontSize: 16 }}>Gerar com IA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={adicionarAnotacao}>
          <Text style={styles.addButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Sidemenu />
    </View>
  );
}

