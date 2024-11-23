import { AddButtonProps } from '@/constants/types/AddButtonProps';
import { TouchableOpacity ,Text, StyleSheet } from 'react-native';

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => { 
    return ( 
      <TouchableOpacity style={styles.button} onPress={onPress}> 
          <Text style={styles.buttonText}>Adicionar Anotação</Text> 
      </TouchableOpacity> ); 
}


const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#4CAF50',
      borderRadius: 50,
      padding: 15,
      elevation: 5,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    }
});

  
export default AddButton