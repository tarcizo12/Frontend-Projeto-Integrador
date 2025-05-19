import {  StyleSheet, Dimensions } from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthScreen,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20A69F',
    width: widthScreen,
    height: heightScreen * 0.07,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    width: widthScreen * 0.9,
    height: heightScreen * 0.3,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  textInput: {
    width: '100%',
    height: '80%',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
  },
  titleContainer: {
    backgroundColor: '#ffffff',
    width: widthScreen * 0.95,
    height: heightScreen * 0.18,
    marginTop: 20,
    padding: 10,
  },
  textTitleContainer: {
    width: '100%',
    height: '30%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleContainer: {
    width: '100%',
    height: '20%',
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  gernerateTitleContainer: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleTextInput: {
    width: '100%',
    height: '60%',
    borderRadius: 8,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
  },
  addButton: {
    backgroundColor: '#20A69F',
    width: widthScreen * 0.25,
    height: heightScreen * 0.05,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;