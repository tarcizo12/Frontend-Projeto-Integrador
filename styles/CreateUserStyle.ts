import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5,
    marginBottom: 15, paddingHorizontal: 10,
  },
  datePickerButton: {
    borderColor: '#ccc', borderWidth: 1, borderRadius: 5,
    height: 40, justifyContent: 'center', paddingHorizontal: 10, marginBottom: 15,
  },
  datePickerText: { color: '#000' },
  switchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  termsContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 15 },
  checkbox: { flexDirection: 'row', alignItems: 'center' },
  checkboxSquare: {
    width: 20, height: 20, borderWidth: 1, borderColor: '#ccc',
    marginRight: 8, justifyContent: 'center', alignItems: 'center',
  },
  checkboxSquareChecked: { backgroundColor: '#4CAF50' },
  checkboxText: { fontSize: 14 },
  checkmark: { color: '#fff', fontWeight: 'bold' },
});

export default styles;