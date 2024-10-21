import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomText from '@/components/CustomText';
import CustomButtonStyle from '@/styles/CustomButtonStyle';

export default function CustomButton({ label, func }: { label: string; func: () => void }) {
  return (
      <TouchableOpacity style={CustomButtonStyle.button} onPress={func}>
        <CustomText label={label} />
      </TouchableOpacity>
  );
}
