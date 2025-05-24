import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import CustomButtonStyle from '@/styles/CustomButtonStyle';
import { PacienteItemProps } from '@/constants/types/PacienteItemProps';

const CustomPacienteCell: React.FC<PacienteItemProps> = ({ paciente, onPress,  }) => {

  
  return (
    <TouchableOpacity key={paciente.idPaciente} onPress={() => onPress(paciente)}>
      <View style={CustomButtonStyle.item}>
        <Image source={{ uri: 'https://random-image-pepebigotes.vercel.app/api/random-image' }} style={CustomButtonStyle.itemPhoto}/>
        <View style={CustomButtonStyle.itemText}>
          <Text style={CustomButtonStyle.itemPrimary}>{paciente.nome}</Text>
          <Text style={CustomButtonStyle.itemSecondary}>{paciente.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomPacienteCell;
