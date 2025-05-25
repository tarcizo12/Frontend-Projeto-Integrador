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
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import { useLoading } from '@/hooks/LoadingContext';
import { StyleHomeScreenLogin } from '@/styles/HomeScreenStyle';

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


  return (
    <View style={StyleHomeScreenLogin.external}>
      <View style={StyleHomeScreenLogin.internal}>
        <Image source={logo} style={StyleHomeScreenLogin.logo} />

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

        <TouchableOpacity style={StyleHomeScreenLogin.button} onPress={handleDirecionarParaAplicaoLogada}>
          <Text style={StyleHomeScreenLogin.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDirecionarParaTelaDeCriarUsuario}>
          <Text style={StyleHomeScreenLogin.linkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}
