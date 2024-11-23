import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'white', 
    marginTop: -300
  },
  titleContainer: {
    width: '100%',
    height: '4%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent : 'center',
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 3,
  },

  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 150,
    alignItems: 'center',
  }
});

export default HomeScreenStyle;
