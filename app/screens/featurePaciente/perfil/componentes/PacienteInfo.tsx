import { View, Text, Image, StyleSheet } from 'react-native';

const PacienteInfo = ({ pacienteInfo }: { pacienteInfo: { name: string; email: string, idPaciente: number  } }) => {
  const uri = `https://randomuser.me/api/portraits/men/${pacienteInfo.idPaciente + 10}.jpg`

  
  return (
  <View style={styles.container}>
    <Image
      source={{ uri }}
      style={styles.profileImage}
    />
    <Text style={styles.name}>{pacienteInfo.name}</Text>
    <Text style={styles.email}>{pacienteInfo.email}</Text>
  </View>
)
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
});

export default PacienteInfo;
