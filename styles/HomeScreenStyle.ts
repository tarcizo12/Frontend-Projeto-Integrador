import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;


const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#E6ECF2', 
  },  
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', 
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end', 
    marginVertical: 10,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, 
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
});


const StyleHomeScreenLogin = StyleSheet.create({
  external: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  internal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#20a69f',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: '#1E90FF',
    fontSize: 14,
    marginVertical: 5,
  },
  footer: {
    marginTop: screenHeight * 0.2,
    alignItems: 'flex-end',
  },
});

export { StyleHomeScreenLogin ,HomeScreenStyle};
