import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F7FB',
    paddingTop: 10,
    borderRadius: 10,
  },

  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },

  itemText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'regular',
  },
});

export default HomeScreenStyle;
