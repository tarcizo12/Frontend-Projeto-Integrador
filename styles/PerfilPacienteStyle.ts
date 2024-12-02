import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const PerfilPacienteStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    profileImage: {
      width: 130,
      height: 130,
      borderRadius: 75,
      marginBottom: 20,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    email: {
      fontSize: 18,
    },
    reports: {
      flex: 1,
      width: width * 0.9,
    },
    title: {
      alignSelf: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    reportsContainer: {
      alignItems: 'flex-start',
      width: width * 0.8,
      height: height * 0.43,
      backgroundColor: '#F6F7FB',
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 20,
    },
  })