import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import UserPayload from '@/constants/models/UserPayload';
import { DateUtil } from '@/util/DateUtil';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isPsychologist, setIsPsychologist] = useState(false);
  const [crp, setCrp] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGoBack = (): void => {
    navigation.navigate(ScreenRoutes.HOME_SCREEN);
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

    if (!acceptedTerms) {
      Alert.alert('Erro', 'Você precisa aceitar os Termos de Uso para continuar.');
      return;
    }

    const informacoesUsuarioPayload: UserPayload = {
      name,
      email,
      password,
      phone,
      crp,
      isPsychologist,
      birthDate: DateUtil.formatDate(birthDate),
    };

    console.log('Registro para criar: ', informacoesUsuarioPayload);
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

      <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>
          {birthDate ? DateUtil.formatDate(birthDate) : 'Selecionar data de nascimento'}
        </Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={birthDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowDatePicker(Platform.OS === 'ios');
            if (selectedDate) {
              setBirthDate(selectedDate);
            }
          }}
          maximumDate={new Date()}
        />
      )}

      {/* Checkbox psicólogo com ícone de check */}
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setIsPsychologist(!isPsychologist)} style={styles.checkbox}>
          <View style={[styles.checkboxSquare, isPsychologist && styles.checkboxSquareChecked]}>
            {isPsychologist && <Text style={styles.checkmark}>✔️</Text>}
          </View>
          <Text style={styles.checkboxText}>Sou psicólogo</Text>
        </TouchableOpacity>
      </View>

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
          <View style={[styles.checkboxSquare, acceptedTerms && styles.checkboxSquareChecked]}>
            {acceptedTerms && <Text style={styles.checkmark}>✔️</Text>}
          </View>
          <Text style={styles.checkboxText}>Aceito os Termos de Uso</Text>
        </TouchableOpacity>
      </View>

      <Button title="Criar" onPress={handleCreateUser} />
      <Button title="Voltar" onPress={handleGoBack} color="#FF6347" />
    </View>
  );
}

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
  datePickerButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  datePickerText: {
    color: '#000',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSquareChecked: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  checkboxText: {
    fontSize: 14,
  },
});
