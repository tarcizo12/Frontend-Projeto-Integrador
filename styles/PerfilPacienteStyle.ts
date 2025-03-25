import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const PerfilPacienteStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#E6ECF2', // Fundo de cor clara
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
    width: '90%',  // Ajustando a largura para se alinhar com os outros componentes
    minHeight: 200, // Definindo uma altura mínima para garantir o tamanho adequado
    backgroundColor: '#ffffff',  // Fundo branco para o card
    borderRadius: 15,  // Bordas arredondadas
    borderColor: '#3C3C3C', // Cor da borda
    borderWidth: 1, // Adicionando borda sutil
    shadowColor: '#000', // Sombra para destacar
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, // Sombra suave
    shadowRadius: 8, // Raio da sombra
    elevation: 5, // Para Android (sombra)
    marginVertical: 15, // Espaçamento do gráfico para outros componentes
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, // Garantindo um pouco de espaço interno
  },
  reports: {
    width: width * 0.9,
    paddingBottom: 20, // Garantindo espaço extra na parte inferior

  },
  reportsContainer: {
    alignItems: 'flex-start',
    width: width * 0.8,
    height: height * 0.43,
    backgroundColor: '#ffff', // Cor de fundo mais escura
    borderRadius: 10,
    borderColor: '#3C3C3C', // Borda mais escura
    borderWidth: 2, 
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    marginTop: 30,
    marginBottom: 40,
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
    fontWeight: 'bold',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center', 
    paddingBottom: 10, 
  },
});
