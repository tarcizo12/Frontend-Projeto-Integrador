import { StyleSheet } from 'react-native';

const CustomTextStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center', // Centraliza o texto horizontalmente
    flex: 1, // Permite que o texto ocupe o espaço disponível
  }
});

export default CustomTextStyle;
