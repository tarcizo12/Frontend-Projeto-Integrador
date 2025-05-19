import styles from '@/styles/LogoutButtonStyle';
import { TouchableOpacity, View , Text, Alert} from 'react-native';


const LogoutButton = () =>{
    
    const handleLogout = () =>{
        Alert.alert('Sair', 'Você saiu do app.');
    }

    return (
        <View >
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Sair do App</Text>
            </TouchableOpacity>
        </View>
    )
}


export default LogoutButton
