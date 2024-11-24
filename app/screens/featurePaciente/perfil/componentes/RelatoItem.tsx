import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import { View, Text, FlatList } from 'react-native';

const RelatoItem = ({ relato }: { relato: { date: string, description: string, emotion: string, emoji: string } }) => (
    <View style={PerfilPacienteStyle.reportsContainer}>
      <Text>Data: {relato.date}</Text>
      <Text>Emoção: {relato.emotion} {relato.emoji}</Text>
      <Text>Descrição: {relato.description}</Text>
    </View>
  );

export default RelatoItem