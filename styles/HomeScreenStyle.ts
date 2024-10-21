import { StyleSheet, Platform } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c', 
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 150,
    alignItems: 'center',
  }
});

export default HomeScreenStyle;
