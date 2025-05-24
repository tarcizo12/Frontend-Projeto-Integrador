// CreateUser.tsx
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

export default function CreateUser() {
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

  const handleGoBack = () => {
    navigation.navigate(ScreenRoutes.HOME_SCREEN);
  };

  const formatDate = (date: Date) => {
    return `${String(date.getDate()).padStart(2, '0')}/${String(
      date.getMonth() + 1
    ).padStart(2, '0')}/${date.getFullYear()}`;
  };

  const handleCreateUser = () => {
    if (!name || !email || !password || !birthDate) {
      Alert.alert('Erro', 'Por favor, preencha nome, email, senha e data de nascimento.');
      return;
    }

    if (isPsychologist && !crp) {
      Alert.alert('Erro', 'Por favor, informe seu CRP.');
      return;
    }

    if (!isPsychologist && !codigoPsicologo) {
      Alert.alert('Erro', 'Por favor, informe o código do psicólogo que te indicou.');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Erro', 'Você precisa aceitar os Termos de Uso para continuar.');
      return;
    }

    const payload: UserPayload = {
      name,
      email,
      password,
      cpf,
      phone,
      birthDate: formatDate(birthDate),
      isPsychologist,
      ...(isPsychologist
        ? { crp }
        : { codigoPsicologoIndicador: Number(codigoPsicologo) }
      ),
    };

    showLoading()
    const tresSegundos = 3000
    LoginProvider.realizarCadastro(payload)
      .then(() => {
        Alert.alert('Sucesso', 'Usuário criado com sucesso!');
        setTimeout(() => {navigation.navigate(ScreenRoutes.HOME_SCREEN)}, tresSegundos);
      })
      .catch((erro) => {
        Alert.alert("Erro", "Falha ao cadastrar usuário.");
      })
      .finally(() => {
        hideLoading()
      });
  };

  useEffect(() => {
    if (isPsychologist) {
      setCodigoPsicologo('');
    } else {
      setCrp('');
    }
  }, [isPsychologist]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Usuário</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf}  />
      <TextInput style={styles.input} placeholder="Telefone (opcional)" value={phone} onChangeText={setPhone} keyboardType="phone-pad"  />

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
        <TextInput style={styles.input} placeholder="CRP" value={crp} onChangeText={setCrp} />
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
}
