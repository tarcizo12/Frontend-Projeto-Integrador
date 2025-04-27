import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon1 from '../../icons/calendar.png';
import Icon2 from '../../icons/notes.png';
import Icon3 from '../../icons/add.png';
import Icon4 from '../../icons/person.png';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import ScreenRoutes from '../../constants/ScreenRoutes';

const Sidemenu = () => {
  const navigation: NavigationProp<RootStackParamList> =
    useNavigation<NavigationProp<RootStackParamList>>();

  const handleCalendario = async (): Promise<void> => {
    navigation.navigate(ScreenRoutes.CALENDARIO_PACIENTE);
  };

  const handleRegistros = async (): Promise<void> => {
    navigation.navigate(ScreenRoutes.REGISTROS_PACIENTE);
  };

  const handleAddRegistros = async (): Promise<void> => {
    navigation.navigate(ScreenRoutes.HOME_PACIENTE_SCREEN);
  };

  return (
    <View style={styles.bottomMenu}>
      {/* <TouchableOpacity style={styles.menuOption} onPress={() => handleCalendario()}>
        <Image source={Icon1} style={styles.menuImage} />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.menuOption} onPress={() => handleRegistros()}>
        <Image source={Icon2} style={styles.menuImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuOption} onPress={() => handleAddRegistros()}>
        <Image source={Icon3} style={styles.menuImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuOption}>
        <Image source={Icon4} style={styles.menuImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#20A69F',
    width: '100%',
    height: 60,
  },
  menuOption: {
    padding: 10,
    alignItems: 'center',
  },
  menuImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Sidemenu;
