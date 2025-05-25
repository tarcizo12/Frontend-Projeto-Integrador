import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Switch,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import UserPayload from '@/constants/models/UserPayload';
import LoginProvider from '@/app/provider/LoginProvider';
import styles from '@/styles/CreateUserStyle';
import { useLoading } from '@/hooks/LoadingContext';
import * as Yup from 'yup';

const validarCPF = (cpf: string) => {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
};

const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, '')                   // Remove tudo que não for dígito
    .replace(/(\d{3})(\d)/, '$1.$2')      // Coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, '$1.$2')      // Coloca o segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')// Coloca o hífen só no final
    .slice(0, 14);                        // Limita a 14 caracteres
};


const formatPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
};

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isPsychologist, setIsPsychologist] = useState(false);
  const [crp, setCrp] = useState('');
  const [codigoPsicologo, setCodigoPsicologo] = useState('');
  const [cpf, setCpf] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { showLoading, hideLoading } = useLoading();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleGoBack = () => navigation.navigate(ScreenRoutes.HOME_SCREEN);

  const formatDate = (date: Date) => 
    `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

  const handleCreateUser = async () => {
    if (!name.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o nome.');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o email.');
      return;
    }

    try {
      await Yup.string().email('Email inválido').required().validate(email);
    } catch (err: any) {
      Alert.alert('Erro', err.message);
      return;
    }

    if (!password) {
      Alert.alert('Erro', 'Por favor, preencha a senha.');
      return;
    }

    if (!cpf.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o CPF.');
      return;
    }

    try {
      await Yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato de CPF inválido')
        .test('cpf-valido', 'CPF inválido', value => validarCPF(value || ''))
        .validate(cpf);
    } catch (err: any) {
      Alert.alert('Erro', err.message);
      return;
    }

    if (!phone.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o telefone.');
      return;
    }

    try {
      await Yup.string()
        .matches(/^\(\d{2}\) 9\d{4}-\d{4}$/, 'Formato de telefone inválido. Use (XX) 9XXXX-XXXX')
        .validate(phone);
    } catch (err: any) {
      Alert.alert('Erro', err.message);
      return;
    }

    if (!birthDate) {
      Alert.alert('Erro', 'Por favor, selecione a data de nascimento.');
      return;
    }

    if (isPsychologist && !crp.trim()) {
      Alert.alert('Erro', 'Por favor, informe seu CRP.');
      return;
    }

    if (!isPsychologist && !codigoPsicologo.trim()) {
      Alert.alert('Erro', 'Por favor, informe o código do psicólogo que te indicou.');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Erro', 'Você precisa aceitar os Termos de Uso para continuar.');
      return;
    }

    const payload: UserPayload = {
      name: name.trim(),
      email: email.trim(),
      password,
      cpf: cpf.replace(/\D/g, '').trim(),
      phone: phone.replace(/\D/g, '').trim(),
      birthDate: formatDate(birthDate),
      isPsychologist,
      ...(isPsychologist
        ? { crp: crp.trim() }
        : { codigoPsicologoIndicador: Number(codigoPsicologo.trim()) }),
    };

    showLoading();

    LoginProvider.realizarCadastro(payload)
      .then(() => {
        Alert.alert('Sucesso', 'Usuário criado com sucesso!');
        setTimeout(() => navigation.navigate(ScreenRoutes.HOME_SCREEN), 3000);
      })
      .catch(() => {
        Alert.alert('Erro', 'Falha ao cadastrar usuário.');
      })
      .finally(() => hideLoading());
  };


  useEffect(() => {
    isPsychologist ? setCodigoPsicologo('') : setCrp('');
  }, [isPsychologist]);

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
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(formatCPF(text))}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={(text) => setPhone(formatPhone(text))}
        keyboardType="phone-pad"
      />

      <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>
          {birthDate ? formatDate(birthDate) : 'Selecionar data de nascimento'}
        </Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={birthDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowDatePicker(Platform.OS === 'ios');
            if (selectedDate) setBirthDate(selectedDate);
          }}
          maximumDate={new Date()}
        />
      )}

      <View style={styles.switchContainer}>
        <Text>Sou psicólogo:</Text>
        <Switch value={isPsychologist} onValueChange={setIsPsychologist} />
      </View>

      {isPsychologist ? (
        <TextInput
          style={styles.input}
          placeholder="CRP"
          value={crp}
          onChangeText={setCrp}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Código do psicólogo"
          value={codigoPsicologo}
          onChangeText={setCodigoPsicologo}
          keyboardType="numeric"
        />
      )}

      <View style={styles.termsContainer}>
        <TouchableOpacity
          onPress={() => setAcceptedTerms(!acceptedTerms)}
          style={styles.checkbox}
        >
          <View style={[styles.checkboxSquare, acceptedTerms && styles.checkboxSquareChecked]}>
            {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxText}>Aceito os Termos de Uso</Text>
        </TouchableOpacity>
      </View>

      <Button title="Criar" onPress={handleCreateUser} />
      <Button title="Voltar" onPress={handleGoBack} color="#FF6347" />
    </View>
  );
};

export default CreateUser;
