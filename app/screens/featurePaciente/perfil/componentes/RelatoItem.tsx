import { RelatoItemProps } from '@/constants/types/RelatoItemProps';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import { DateUtil } from '@/util/DateUtil';
import { View, Text } from 'react-native';

const RelatoItem = ({anotacao} : RelatoItemProps) => (
    <View style={PerfilPacienteStyle.reportsContainer}>
      <Text style = {{  'fontWeight' : 'bold'}}>Data: {DateUtil.formatarDataCompleta(anotacao.dhRegistro.toString())}</Text>
      <Text style = {{  'fontWeight' : 'bold'}}>Emoção: {anotacao.emocaoEstimada}</Text>
      <Text style = {{  'fontWeight' : 'bold'}} >Descrição: {anotacao.descricao}</Text>
    </View>
  );

export default RelatoItem