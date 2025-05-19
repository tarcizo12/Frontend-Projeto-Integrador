import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: '#00000099',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '85%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    closeButton: {
      alignSelf: 'flex-end',
    },
    closeText: {
      color: '#007AFF',
      fontWeight: 'bold',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    status: {
      color: 'gray',
      marginBottom: 10,
    },
    texto: {
      fontSize: 16,
      marginBottom: 15,
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    category: {
      backgroundColor: '#eee',
      padding: 5,
      borderRadius: 5,
      margin: 3,
    },
  });

  export default styles;