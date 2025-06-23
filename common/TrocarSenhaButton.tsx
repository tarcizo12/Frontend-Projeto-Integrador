import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '@/styles/PerfilPacienteStyle';

type Props = {
  handleChangePassword: () => void;
};

const TrocarSenhaButton: React.FC<Props> = ({ handleChangePassword }) => {
  return (
    <TouchableOpacity style={styles.infoRow} onPress={handleChangePassword}>
      <View style={styles.infoIconContainer}><Feather name="lock" size={20} color="#adb5bd" /></View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoValue}>Trocar Senha</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#adb5bd" />
    </TouchableOpacity>
  );
};

export default TrocarSenhaButton;
