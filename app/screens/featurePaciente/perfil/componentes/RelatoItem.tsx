import { RelatoItemProps } from '@/constants/types/RelatoItemProps';
import { DateUtil } from '@/util/DateUtil';
import { View, Text, StyleSheet } from 'react-native';

const RelatoItem = ({ anotacao }: RelatoItemProps) => (
  <View style={styles.reportsContainer}>
    <Text style={styles.label}>Data: {DateUtil.formatarDataCompleta(anotacao.dhRegistro.toString())}</Text>
    <Text style={styles.label}>Emoção: {anotacao.emocaoEstimada}</Text>
    <Text style={styles.label}>Descrição: {anotacao.descricao}</Text>
  </View>
);

const styles = StyleSheet.create({
  reportsContainer: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 8,
    width: 300,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default RelatoItem;
