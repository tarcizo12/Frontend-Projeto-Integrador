import { AddButtonProps } from '@/constants/types/AddButtonProps';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => { 
    return ( 
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}> 
          <Text style={styles.buttonText}>+</Text> 
        </TouchableOpacity>
      </View>
    ); 
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#6495ed',
    borderRadius: 40,                     
    elevation: 5,
    width: 50,                    
    height: 50,                   
    justifyContent: 'center',     
    alignItems: 'center',         
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,                 
    fontWeight: 'bold',
  },
});


export default AddButton;
