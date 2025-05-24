import React from 'react';
import { TouchableOpacity, View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import ScreenRoutes from '@/constants/ScreenRoutes';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BackButton() {
  const navigation = useNavigation<NavigationProp>();
  const { logoutUsuario } = useUsuarioLogado();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert(
        'Sair',
        'Você não pode voltar. Deseja sair do app?',
        [
          {
            text: 'Não',
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: () => {
              logoutUsuario();
              navigation.reset({
                index: 0,
                routes: [{ name: ScreenRoutes.HOME_SCREEN }],
              });
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    left: 10,
  },
  button: {
    backgroundColor: '#6495ed',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
