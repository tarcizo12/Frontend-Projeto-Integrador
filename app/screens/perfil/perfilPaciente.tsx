import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../featurePsicologo/HomePsciologoScreen';

type PacienteRouteProp = RouteProp<RootStackParamList, 'Paciente'>;

const RelatoItem = ({ relato }: { relato: { date: string, description: string, emotion: string, emoji: string } }) => (
  <View style={styles.reportsContainer}>
    <Text>Data: {relato.date}</Text>
    <Text>Emoção: {relato.emotion} {relato.emoji}</Text>
    <Text>Descrição: {relato.description}</Text>
  </View>
);

const PacienteInfo = ({ pacienteInfo }: { pacienteInfo: { photo: string, name: string, email: string } }) => (
  <View style={styles.container}>
    <Image source={{ uri: pacienteInfo.photo }} style={styles.profileImage} />
    <Text style={styles.name}>{pacienteInfo.name}</Text>
    <Text style={styles.email}>{pacienteInfo.email}</Text>
  </View>
);

const PerfilPaciente = () => {
  const relatos = [
    { id: 1, date: '2021-09-01', description: 'Paciente relatou que está com dificuldades para dormir.', emotion: 'Triste', emoji: '😢' },
    { id: 2, date: '2021-09-02', description: 'Paciente relatou que está com dificuldades para dormir.', emotion: 'Triste', emoji: '😢' },
    { id: 3, date: '2021-09-03', description: 'Paciente relatou que está com dificuldades para dormir.', emotion: 'Triste', emoji: '😢' },
    { id: 4, date: '2021-09-04', description: 'Paciente relatou que está com dificuldades para dormir.', emotion: 'Triste', emoji: '😢' },
  ];

  const route = useRoute<PacienteRouteProp>();
  const pacienteInfo = route.params?.pacienteInfo;

  if (!pacienteInfo) {
    return (
      <View style={styles.container}>
        <Text>Informações do paciente não disponíveis.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PacienteInfo pacienteInfo={pacienteInfo} />
      <View style={styles.reports}>
        <Text style={styles.title}>Relatos</Text>
        <FlatList
          data={relatos}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RelatoItem relato={item} />}
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
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
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
  },
  reports: {
    flex: 1,
    width: width * 0.9,
    marginTop: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  reportsContainer: {
    alignItems: 'flex-start',
    width: width * 0.8,
    height: height * 0.43,
    backgroundColor: '#F6F7FB',
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    margin: 21,
  },
});

export default PerfilPaciente;
