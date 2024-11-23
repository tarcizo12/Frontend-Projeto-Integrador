import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CustomButtonStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    alignItems: 'center',
    width: width - 20, // 20 px de margem horizontal
  },

  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  itemText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  itemPrimary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  itemSecondary: {
    fontSize: 14,
    color: '#666',
  },

  itemInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default CustomButtonStyle;
