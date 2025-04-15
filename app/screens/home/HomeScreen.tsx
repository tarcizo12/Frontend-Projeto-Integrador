import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, Alert } from 'react-native';
import ScreenRoutes from '@/constants/ScreenRoutes';
import CustomInput from '@/common/CustomButton'; // Componente CustomInput
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import logo from '@/icons/logo_tcc.png';
import * as yup from 'yup'; // Importando o yup

// Definir o schema de validação do email com o yup
const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('O email é obrigatório'),
});

export default function HomeScreen() {
  const navigation: NavigationProp<RootStackParamList> =
    useNavigation<NavigationProp<RootStackParamList>>();

  // Estados para armazenar o valor do email e senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função de validação do email
  const validateEmail = async () => {
    try {
      await emailSchema.validate({ email });
      return true; // Validação bem-sucedida
    } catch (err) {
      Alert.alert('Erro', err.errors[0]);
      return false; // Validação falhou
    }
  };

  // Função para redirecionar para a tela do paciente
  const handleDirecionarParaTelaPaciente = async (): void => {
    // if (!email || !senha) {
    //   alert("Por favor, preencha todos os campos");
    //   return;
    // }

    // // Validar o email antes de prosseguir
    // const isEmailValid = await validateEmail();
    // if (!isEmailValid) {
    //   return; // Se o email não for válido, não navega
    // }

    // Navegar para a tela do paciente se tudo estiver certo
    navigation.navigate(ScreenRoutes.HOME_PACIENTE_SCREEN);
  };

  return (
    <View style={stylesView.external}>
      <View style={stylesView.internal}>
        <Image source={logo} style={imageStyle} />

        {/* Campo para o email */}
        <CustomInput
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo para a senha */}
        <CustomInput
          label="Senha"
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={stylesButton.button} onPress={handleDirecionarParaTelaPaciente}>
          <Text style={stylesButton.buttonText}>Login</Text>
        </TouchableOpacity>

        

          <TouchableOpacity onPress={() => alert("Redirecionar para a tela de criação de conta")}>
            <Text style={stylesView.linkText}>Criar conta</Text>
          </TouchableOpacity>

          <View style={stylesView.footer}>
          <TouchableOpacity onPress={() => alert("Redirecionar para a tela de recuperação de senha")}>
            <Text style={stylesView.linkText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const stylesView = {
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

  footer: {
    marginTop: "80%",
    alignItems: 'flex-end',
  },

  linkText: {
    color: '#1E90FF', // Cor azul para destacar o link
    fontSize: 14,
    marginVertical: 5,
  },
};

const imageStyle = {
  width: 200,
  height: 100,
  marginBottom: 30,
};

const stylesButton = {
  button: {
    backgroundColor: '#20a69f',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center' as const,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};
