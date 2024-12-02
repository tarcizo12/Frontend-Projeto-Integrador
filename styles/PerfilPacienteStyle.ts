import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const PerfilPacienteStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#fff', // Garantindo fundo branco
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
    textAlign: 'center', 
  },
  email: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10, // Diminuindo o espaço do email para o gráfico
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  graficoContainer: {
    width: '100%',
    height: 180, // Ajustando a altura do gráfico
    marginVertical: 10, // Diminuindo o espaço entre o gráfico e o container de relatos
    alignItems: 'center',
    justifyContent: 'center',
  },
  reports: {
    width: width * 0.9,
    flex: 1,
    paddingBottom: 20, // Garantindo espaço extra na parte inferior
  },
  reportsContainer: {
    alignItems: 'flex-start',
    width: width * 0.8,
    height: height * 0.43,
    backgroundColor: '#E0E1E6', // Cor de fundo mais escura
    borderRadius: 10,
    borderColor: '#3C3C3C', // Borda mais escura
    borderWidth: 2, 
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    marginTop: 20, // Aumentando o espaço entre o gráfico e os relatos
    marginBottom: 30,
    marginRight: 20, // Espaço após o container de relatos
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3C3C3C', 
    paddingLeft: 10,
    marginBottom: 5, // Diminuindo o espaço entre o email e o gráfico
    backgroundColor: '#fff', 
    fontSize: 16,
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center', 
    paddingBottom: 10, // Espaço adicional para garantir que o scroll vai além dos relatos
  },
});
