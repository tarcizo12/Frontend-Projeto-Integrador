import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ScreenRoutes from '@/constants/ScreenRoutes';
import CustomInput from '@/common/CustomButton'; // Componente CustomInput
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import logo from '../../../icons/logo_tcc.png';
import * as yup from 'yup'; // Importando o yup

const screenHeight = Dimensions.get('window').height;

// Definir o schema de validação do email com o yup
const emailSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
});

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleDirecionarParaTelaPaciente = async (): Promise<void> => {
    // Validação desativada por enquanto
    navigation.navigate(ScreenRoutes.HOME_PACIENTE_SCREEN);
  };

  const handleDirecionarParaTelaDeCriarUsuario = (): void => {
    navigation.navigate(ScreenRoutes.CREATE_USER);
  };

  const handleDirecionarParaTelaDeRecuperarSenha = (): void => {
    navigation.navigate(ScreenRoutes.FORGOT_MY_PASSWORD);
  };

  const handleVoltarParaTelaDeLogin = (): void => {
    navigation.navigate(ScreenRoutes.HOME_SCREEN);
  };

  return (
    <View style={styles.external}>
      <View style={styles.internal}>
        <Image source={logo} style={styles.logo} />

        <CustomInput
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none" 
          func={undefined}        
        />

        <CustomInput
          label="Senha"
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry func={undefined}        
        />

        <TouchableOpacity style={styles.button} onPress={handleDirecionarParaTelaPaciente}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDirecionarParaTelaDeCriarUsuario}>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handleDirecionarParaTelaDeRecuperarSenha}>
            <Text style={styles.linkText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  external: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  internal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#20a69f',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: '#1E90FF',
    fontSize: 14,
    marginVertical: 5,
  },
  footer: {
    marginTop: screenHeight * 0.2,
    alignItems: 'flex-end',
  },
});
