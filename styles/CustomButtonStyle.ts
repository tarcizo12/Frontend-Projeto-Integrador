import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CustomButtonStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', // Fundo branco para contraste com #6495ED
    padding: 12,
    marginVertical: 6,
    borderRadius: 12, // Bordas arredondadas para um visual moderno
    width: width - 30, // Mantém margem lateral para melhor espaçamento
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para destacar os itens
  },

  itemPhoto: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#6495ED', // Borda para destacar a foto
  },

  itemText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  itemPrimary: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },

  itemSecondary: {
    fontSize: 14,
    color: '#555',
  },

  itemInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default CustomButtonStyle;
