import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#E6ECF2', // Melhor contraste com #6495ED
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

export default HomeScreenStyle;
