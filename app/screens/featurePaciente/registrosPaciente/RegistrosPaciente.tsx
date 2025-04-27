import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import Sidemenu from '../../Sidemenu';
import ContainerRegistro from './components/ContainerRegistro';

const registrosExemplo = [
  {
    id: '1',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste', 'Feliz', 'Surpreso'],
    status: 'Visualizado ✅',
  },
  {
    id: '2',
    title: 'Registro',
    icon: '↗️',
    categories: ['Cansado', 'Desanimado'],
    status: 'Não Visualizado ❌',
  },
  {
    id: '3',
    title: 'Registro',
    icon: '↗️',
    categories: ['Feliz', 'Motivado'],
    status: 'Visualizado ✅',
  },
  {
    id: '4',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste'],
    status: 'Visualizado ✅',
  },
  {
    id: '5',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste'],
    status: 'Visualizado ✅',
  },
  {
    id: '6',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste'],
    status: 'Visualizado ✅',
  },
  {
    id: '7',
    title: 'Registro',
    icon: '↗️',
    categories: ['Triste'],
    status: 'Visualizado ✅',
  },
];

const RegistrosPaciente = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>
          Minhas Anotações
        </Text>
      </View>
      <View style={styles.backgroundRegistro}>
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          data={registrosExemplo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContainerRegistro
              title={item.title}
              icon={item.icon}
              categories={item.categories}
              status={item.status}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.menu}>
        <Sidemenu />
      </View>
    </View>
  );
};

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleText: {
      height: heightScreen * 0.07,
      width: widthScreen,
      backgroundColor: '#20a69f',
      justifyContent: 'center',
      alignItems: "center"
    },
    menu: {
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: '#20A69F',
    },
    backgroundRegistro: {
      flex: 1,
      width: '100%',
      backgroundColor: '#e7e7e7',
    },
    scrollContainer: {
      paddingBottom: 20, // ajuda a não cortar os últimos itens
      alignItems: 'center',
    }
  });
  

export default RegistrosPaciente;
