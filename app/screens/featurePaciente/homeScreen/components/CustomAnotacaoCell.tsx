import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import CustomButtonStyle from '@/styles/CustomButtonStyle';
import { AnotacaoItemProps } from '@/constants/types/AnotacaoItemProps';
import { StringUtil } from '@/util/StringUtil';

const CustomAnotacaoCell: React.FC<AnotacaoItemProps> = ({ anotacao, onPress,  }) => {

  const dataNoFormatoBrasileiro =  StringUtil.formatarDataParaBrasileiro(anotacao.dhRegistro?.toString());

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
