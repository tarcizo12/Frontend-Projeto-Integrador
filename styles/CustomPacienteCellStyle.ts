import { StyleSheet } from 'react-native';

export const CustomPacienteCellStyle = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#444',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  data: {
    fontSize: 14,
    color: '#aaa',
  },
});
