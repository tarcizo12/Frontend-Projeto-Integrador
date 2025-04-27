import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch, TouchableOpacity } from 'react-native';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isPsychologist, setIsPsychologist] = useState(false);
  const [crp, setCrp] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGoBack = (): void => {
    navigation.navigate(ScreenRoutes.HOME_SCREEN);
  };

  const handleCreateUser = () => {
    // Validações
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Por favor, preencha nome, email e senha.');
      return;
    }

    if (isPsychologist && !crp) {
      Alert.alert('Erro', 'Por favor, informe seu CRP.');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Erro', 'Você precisa aceitar os Termos de Uso para continuar.');
      return;
    }

    // Lógica de criação de usuário aqui (ex: chamada de API)
    Alert.alert('Sucesso', 'Usuário criado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone (opcional)"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        value={birthDate}
        onChangeText={setBirthDate}
        keyboardType="numeric"
      />

      {/* Toggle Psicólogo */}
      <View style={styles.switchContainer}>
        <Text>Sou psicólogo:</Text>
        <Switch value={isPsychologist} onValueChange={setIsPsychologist} />
      </View>

      {/* Se for psicólogo, mostrar campo CRP */}
      {isPsychologist && (
        <TextInput
          style={styles.input}
          placeholder="CRP"
          value={crp}
          onChangeText={setCrp}
        />
      )}

      {/* Aceitar Termos */}
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setAcceptedTerms(!acceptedTerms)} style={styles.checkbox}>
          <View style={[styles.checkboxSquare, acceptedTerms && styles.checkboxSquareChecked]} />
          <Text style={styles.checkboxText}>Aceito os Termos de Uso</Text>
        </TouchableOpacity>
      </View>

      <Button title="Criar" onPress={handleCreateUser} />
      <Button title="Voltar" onPress={handleGoBack} color="#FF6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxSquare: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
  },
  checkboxSquareChecked: {
    backgroundColor: '#4CAF50',
  },
  checkboxText: {
    fontSize: 14,
  },
});
