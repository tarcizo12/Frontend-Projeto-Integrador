import { RelatoItemProps } from '@/constants/types/RelatoItemProps';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import { StringUtil } from '@/util/StringUtil';
import { View, Text } from 'react-native';

const RelatoItem = ({anotacao} : RelatoItemProps) => (
    <View style={PerfilPacienteStyle.reportsContainer}>
      <Text>Data: {StringUtil.formatarDataCompleta(anotacao.dhRegistro.toString())}</Text>
      <Text>Emoção: {anotacao.emocaoEstimada}</Text>
      <Text>Descrição: {anotacao.descricao}</Text>
    </View>
  );

export default RelatoItem