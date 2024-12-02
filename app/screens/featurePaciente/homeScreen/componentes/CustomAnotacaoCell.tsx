import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import CustomButtonStyle from '@/styles/CustomButtonStyle';
import { AnotacaoItemProps } from '@/constants/types/AnotacaoItemProps';

const CustomAnotacaoCell: React.FC<AnotacaoItemProps> = ({ anotacao, onPress,  }) => {

  const formatarDataParaBrasileiro = (data: string): string =>{
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
      return ""
    }
  
    const [ano, mes, dia] = data.split("-");
  
    return `${dia}/${mes}/${ano}`;
  }
  console.log("data registro: ", anotacao.emocaoEstimada)
  const dataNoFormatoBrasileiro = formatarDataParaBrasileiro(anotacao.dhRegistro?.toString());

  return (
    <TouchableOpacity key={anotacao.idAnotacao} onPress={() => onPress(anotacao)}>
      <View style={CustomButtonStyle.item}>
        <View style={CustomButtonStyle.itemText}>
          <Text style={CustomButtonStyle.itemPrimary}>{anotacao.descricao}</Text>
          <Text style={CustomButtonStyle.itemSecondary}>{dataNoFormatoBrasileiro}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomAnotacaoCell;
