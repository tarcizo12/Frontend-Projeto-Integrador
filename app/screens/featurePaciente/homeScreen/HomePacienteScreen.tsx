import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import Sidemenu from '../../Sidemenu';
import styles from '@/styles/HomePacienteScreenStyle';

import { useLoading } from '@/hooks/LoadingContext';
import { PacienteModel } from '@/constants/models/PacienteModel';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';

export default function HomePacienteScreen() {
  const [descricaoAnotacaoText, setDescricaoAnotacaoText] = useState('');
  const [tituloAnotacaoText, setTituloAnotacaoText] = useState('');
  const { usuarioLogado } = useUsuarioLogado();
  
  const { showLoading, hideLoading } = useLoading();

  const adicionarAnotacao = async () => {
    if (!tituloAnotacaoText || !descricaoAnotacaoText) {
      Alert.alert('Atenção', 'Por favor, preencha o título e a descrição antes de salvar');
      return;
    }

    const novaAnotacao = new AnotacaoPacienteModel();
    const paciente: PacienteModel = usuarioLogado.usuarioLogadoData as PacienteModel;

    novaAnotacao.descricao = descricaoAnotacaoText;
    novaAnotacao._fk_idPaciente = paciente.idPaciente;
    novaAnotacao.titulo = tituloAnotacaoText;

    try {
      showLoading();
      await AnotacaoProvider.salvarNovaAnotacao(novaAnotacao);
      Alert.alert('Sucesso', 'Anotação registrada com sucesso!');
      setDescricaoAnotacaoText('');
      setTituloAnotacaoText('');
    } catch (error) {
      console.error("Falha ao salvar nova anotacao: ", error);
      Alert.alert('Erro', 'Não foi possível salvar a anotação. Tente novamente.');
    } finally {
      hideLoading();
    }
  };

  const gerarTitulo = async () => {
    if (!descricaoAnotacaoText) {
      Alert.alert('Atenção', 'Por favor, escreva algo sobre como está se sentindo antes de gerar o título');
      return;
    }

    showLoading();
    try {
      const tituloResponse = await AnotacaoProvider.obterTituloGeradoPorDescricao(descricaoAnotacaoText);
      setTituloAnotacaoText(tituloResponse.tituloGerado);
    } catch (error) {
      console.error("Falha ao gerar titulo: ", error);
      Alert.alert('Erro', 'Não foi possível gerar o título. Tente novamente.');
    } finally {
      hideLoading();
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
        <TextInput
          style={styles.titleInput}
          placeholder="Digite o título da anotação ou gere automaticamente"
          value={tituloAnotacaoText}
          onChangeText={setTituloAnotacaoText}
        />
        <View style={styles.generateTitleContainer}>
          <TouchableOpacity 
            style={styles.generateButton} 
            onPress={gerarTitulo}
            activeOpacity={0.7}
          >
            <Text style={styles.generateButtonText}>Gerar com IA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={adicionarAnotacao}
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Sidemenu />
    </View>
  );
}