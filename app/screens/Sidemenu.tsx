import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon2 from '../../icons/notes.png';
import Icon3 from '../../icons/add.png';
import Icon4 from '../../icons/person.png';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import ScreenRoutes from '../../constants/ScreenRoutes';

const Sidemenu = () => {
  const navigation: NavigationProp<RootStackParamList> =
    useNavigation<NavigationProp<RootStackParamList>>();

  const handleRegistros = async (): Promise<void> => {
    navigation.navigate(ScreenRoutes.REGISTROS_PACIENTE);
  };

  const handleAddRegistros = async (): Promise<void> => {
    navigation.navigate(ScreenRoutes.HOME_PACIENTE_SCREEN);
  };

  const handlePerfil = async (): Promise<void> => {
    navigation.navigate(ScreenRoutes.PERFIL_PACIENTE);
  };

 
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.menuOption} onPress={handleRegistros}>
        <Image source={Icon2} style={styles.menuImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuOption} onPress={handleAddRegistros}>
        <Image source={Icon3} style={styles.menuImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuOption} onPress={handlePerfil}>
        <Image source={Icon4} style={styles.menuImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    position: 'absolute',        
    bottom: 0,                   
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#20A69F',   
    borderTopLeftRadius: 20,      
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    zIndex: 100,                  
  },
  menuOption: {
    padding: 15,
    alignItems: 'center',
  },
  menuImage: {
    width: 25,                   
    height: 25,
    resizeMode: 'contain',
    tintColor: '#fff',           
  },
});

export default Sidemenu;
