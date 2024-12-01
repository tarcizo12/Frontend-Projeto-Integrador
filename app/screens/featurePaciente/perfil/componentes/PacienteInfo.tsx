import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import { View, Text, Image, FlatList } from 'react-native';

const PacienteInfo = ({ pacienteInfo }: { pacienteInfo: { photo: string, name: string, email: string } }) => (
    <View style={PerfilPacienteStyle.container}>
      <Image source={{ uri: pacienteInfo.photo }} style={PerfilPacienteStyle.profileImage} />
      <Text style={PerfilPacienteStyle.name}>{pacienteInfo.name}</Text>
      <Text style={PerfilPacienteStyle.email}>{pacienteInfo.email}</Text>
    </View>
  );

export default PacienteInfo;