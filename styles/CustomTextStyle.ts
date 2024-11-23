import { StyleSheet } from 'react-native';

const CustomTextStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center', // Centraliza o texto horizontalmente
    textAlignVertical: 'center', // Centraliza o texto verticalmente
    flex: 1, // Permite que o texto ocupe o espaço disponível
  },

  placeholderTextColor: {
    fontSize: 16,
    backgroundColor: '#fff',
  }
});

export default CustomTextStyle;
