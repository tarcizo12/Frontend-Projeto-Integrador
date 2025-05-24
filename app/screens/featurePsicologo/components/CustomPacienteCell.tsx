import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import CustomButtonStyle from '@/styles/CustomButtonStyle';
import { PacienteItemProps } from '@/constants/types/PacienteItemProps';

const CustomPacienteCell: React.FC<PacienteItemProps> = ({ paciente, onPress,  }) => {
  const uri = `https://randomuser.me/api/portraits/men/${paciente.idPaciente + 10}.jpg`

  return (
    <TouchableOpacity key={paciente.idPaciente} onPress={() => onPress(paciente)}>
      <View style={CustomButtonStyle.item}>
        <Image source={{ uri }} style={CustomButtonStyle.itemPhoto}/>
        <View style={CustomButtonStyle.itemText}>
          <Text style={CustomButtonStyle.itemPrimary}>{paciente.nome}</Text>
          <Text style={CustomButtonStyle.itemSecondary}>{paciente.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomPacienteCell;
