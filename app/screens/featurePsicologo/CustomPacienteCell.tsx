import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import CustomButtonStyle from '@/styles/CustomButtonStyle';
import { PacienteModel } from '@/constants/models/PacienteModel';

type PacienteItemProps = {
  paciente: PacienteModel;
  onPress: (paciente: PacienteModel) => void;
};

const CustomPacienteCell: React.FC<PacienteItemProps> = ({ paciente, onPress,  }) => {
  const uri = 'https://random-image-pepebigotes.vercel.app/api/random-image';
  return (
    <TouchableOpacity key={paciente.getIdPaciente()} onPress={() => onPress(paciente)}>
      <View style={CustomButtonStyle.item}>
        <Image source={{ uri }} style={CustomButtonStyle.itemPhoto}/>
        <View style={CustomButtonStyle.itemText}>
          <Text style={CustomButtonStyle.itemPrimary}>{paciente.getNome()}</Text>
          <Text style={CustomButtonStyle.itemSecondary}>{paciente.getEmail()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomPacienteCell;
