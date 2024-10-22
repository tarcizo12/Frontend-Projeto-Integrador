import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CustomPacienteCellStyle } from '@/styles/CustomPacienteCellStyle';

export default function CustomPacienteCell({ nome, dataNascimento, onPress }: { nome: string, dataNascimento: string, onPress: () => void }) {
  return (
    <TouchableOpacity style={CustomPacienteCellStyle.container} onPress={onPress}>
      <Text style={CustomPacienteCellStyle.nome}>{nome}</Text>
      <Text style={CustomPacienteCellStyle.data}>{dataNascimento}</Text>
    </TouchableOpacity>
  );
}
