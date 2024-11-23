import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import CustomButtonStyle from '@/styles/CustomButtonStyle';
import {AnotacaoPacienteModel} from '@/constants/models/AnotacaoPacienteModel';

type AnotacaoItemProps = {
  anotacao: AnotacaoPacienteModel;
  onPress: (anotacao: AnotacaoPacienteModel) => void;
};

const CustomAnotacaoCell: React.FC<AnotacaoItemProps> = ({ anotacao, onPress,  }) => {
  return (
    <TouchableOpacity key={anotacao.getIdAnotacao()} onPress={() => onPress(anotacao)}>
      <View style={CustomButtonStyle.item}>
        <View style={CustomButtonStyle.itemText}>
          <Text style={CustomButtonStyle.itemPrimary}>{anotacao.getIdAnotacao()}</Text>
          <Text style={CustomButtonStyle.itemSecondary}>{anotacao.getDhRegistro().toString()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomAnotacaoCell;
