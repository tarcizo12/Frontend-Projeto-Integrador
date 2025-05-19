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
import CustomInput from '@/common/CustomButton'; 
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import logo from '../../../icons/logo_tcc.png';
import * as yup from 'yup'; 
import LoginProvider from '@/app/provider/LoginProvider';
import { UsuarioLogado } from '@/constants/models/UsuarioLogado';
import { PacienteModel } from '@/constants/models/PacienteModel';
import { PsicologoModel } from '@/constants/models/PsicologoModel';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';


const screenHeight = Dimensions.get('window').height;


const emailSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
});

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setUsuarioLogado } = useUsuarioLogado();

  const handleDirecionarParaAplicaoLogada = async (): Promise<void> => {
    const res = await LoginProvider.realizarLogin({ email, senha });
    const resultadoUsuarioLogado: UsuarioLogado = res.data;
    
    console.log("Usuario Logado com sucesso, informacoes: \n", resultadoUsuarioLogado);
    console.log(`Nome: ${resultadoUsuarioLogado.usuarioLogadoData?.nome}`);
    console.log(`Email: ${resultadoUsuarioLogado.usuarioLogadoData?.email}`);
    console.log(`CPF: ${resultadoUsuarioLogado.usuarioLogadoData?.cpf}`);

    if(resultadoUsuarioLogado.isPaciente){
      const paciente = resultadoUsuarioLogado.usuarioLogadoData as PacienteModel;

      setUsuarioLogado(resultadoUsuarioLogado)
      navigation.navigate(ScreenRoutes.REGISTROS_PACIENTE, { usuario: paciente });
    }

    if(resultadoUsuarioLogado.isPsicologo){
      const psicologo = resultadoUsuarioLogado.usuarioLogadoData as PsicologoModel;

      setUsuarioLogado(resultadoUsuarioLogado)
      navigation.navigate(ScreenRoutes.HOME_PSICOLOGO_SCREEN);
    }
  };
  

  const handleDirecionarParaTelaDeCriarUsuario = (): void => {
    navigation.navigate(ScreenRoutes.CREATE_USER);
  };

  const handleDirecionarParaTelaDeRecuperarSenha = (): void => {
    navigation.navigate(ScreenRoutes.FORGOT_MY_PASSWORD);
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

        <TouchableOpacity style={styles.button} onPress={handleDirecionarParaAplicaoLogada}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDirecionarParaTelaDeCriarUsuario}>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const ComponenteEsqueciASenha = () => {
    return (
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleDirecionarParaTelaDeRecuperarSenha}>
              <Text style={styles.linkText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
    )
  }
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
