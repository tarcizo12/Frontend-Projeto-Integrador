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
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import logo from '../../../icons/logo_tcc.png';
import * as yup from 'yup'; 
import LoginProvider from '@/app/provider/LoginProvider';
import { UsuarioLogado } from '@/constants/models/UsuarioLogado';
import { PacienteModel } from '@/constants/models/PacienteModel';
import { PsicologoModel } from '@/constants/models/PsicologoModel';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import { useLoading } from '@/hooks/LoadingContext';


const screenHeight = Dimensions.get('window').height;


const emailSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
});

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setUsuarioLogado } = useUsuarioLogado();
  const { showLoading, hideLoading} = useLoading()

  const handleDirecionarParaAplicaoLogada = async (): Promise<void> => {
    showLoading();
  
    try {
      const res = await LoginProvider.realizarLogin({ email, senha });
      const resultadoUsuarioLogado: UsuarioLogado = res.data;
      setUsuarioLogado(resultadoUsuarioLogado);
  
      if (resultadoUsuarioLogado.isPaciente) {
        const paciente = resultadoUsuarioLogado.usuarioLogadoData as PacienteModel;
  
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: ScreenRoutes.REGISTROS_PACIENTE,
                params: { usuario: paciente },
              },
            ],
          })
        );
      }
  
      if (resultadoUsuarioLogado.isPsicologo) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: ScreenRoutes.HOME_PSICOLOGO_SCREEN }],
          })
        );
      }
    } catch (error: any) {
  
      const mensagem = error?.response?.data?.message || 'Não foi possível realizar o login.';
      Alert.alert('Falha no login', mensagem);
    } finally {
      hideLoading();
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
