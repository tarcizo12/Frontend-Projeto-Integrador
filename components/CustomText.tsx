import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import CustomTextViewStyle from '@/styles/CustomTextStyle';


export default function CustomText({ label }: { label: string }) {
  return (
      <Text style={CustomTextViewStyle.title}>{label}</Text>
  );
}