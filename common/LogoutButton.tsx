import { TouchableOpacity, View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import styles from '@/styles/PerfilPacienteStyle';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LogoutButton = () => {
  const navigation = useNavigation<NavigationProp>();
  const { logoutUsuario }= useUsuarioLogado();
  
  const handleLogout = () => {
    Alert.alert('Sair da Conta', 'Tem certeza que deseja sair?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: () => {
          logoutUsuario();
          navigation.reset({
            index: 0,
            routes: [{ name: ScreenRoutes.HOME_SCREEN }],
          });
        },
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.infoRow} onPress={handleLogout}>
      <View style={styles.infoIconContainer}><Feather name="log-out" size={20} color="#e03131" /></View>
      <View style={styles.infoTextContainer}>
        <Text style={[styles.infoValue, { color: '#e03131' }]}>Sair da Conta</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#e03131" />
    </TouchableOpacity>
  );
};

export default LogoutButton;
