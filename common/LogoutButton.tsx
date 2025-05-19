import { TouchableOpacity, View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '@/styles/LogoutButtonStyle';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LogoutButton = () => {
  const navigation = useNavigation<NavigationProp>();
  const { logoutUsuario }= useUsuarioLogado();
  
  const handleLogout = () => {
    Alert.alert('Sair', 'Você saiu do app.', [
      {
        text: 'OK',
        onPress: () => {
          logoutUsuario()
          navigation.reset({
            index: 0,
            routes: [{ name: ScreenRoutes.HOME_SCREEN }],
          });
        },
      },
    ]);
  };

  return (
    <View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
