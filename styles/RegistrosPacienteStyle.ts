import {
    StyleSheet,
    Dimensions,
  } from 'react-native';


const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    height: heightScreen * 0.07,
    width: widthScreen,
    backgroundColor: '#20a69f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#20A69F',
  },
  backgroundRegistro: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e7e7e7',
  },
  scrollContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 60,
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#20a69f',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    color: '#333',
    width: '45%', // Ajuste a largura conforme necessário
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#20a69f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#20a69f',
  },
  modalButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#20a69f',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
  },
});

export default styles;