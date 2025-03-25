import { RelatoItemProps } from '@/constants/types/RelatoItemProps';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import { StringUtil } from '@/util/StringUtil';
import { View, Text } from 'react-native';

const RelatoItem = ({anotacao} : RelatoItemProps) => (
    <View style={PerfilPacienteStyle.reportsContainer}>
      <Text style = {{  'fontWeight' : 'bold'}}>Data: {StringUtil.formatarDataCompleta(anotacao.dhRegistro.toString())}</Text>
      <Text style = {{  'fontWeight' : 'bold'}}>Emoção: {anotacao.emocaoEstimada}</Text>
      <Text style = {{  'fontWeight' : 'bold'}} >Descrição: {anotacao.descricao}</Text>
    </View>
  );

export default RelatoItem