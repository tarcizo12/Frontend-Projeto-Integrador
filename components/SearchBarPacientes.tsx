import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { SearchBar } from '@rneui/base';

interface StyleProps {
  container: object;
  input: object;
  inputStyle: object;
}

export default function SearchBarPacientes({ placeholder, style }: { placeholder: string, style: StyleProps }) {

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  function buscaPaciente() {
    // TODO: Implementar busca de paciente
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <SearchBar      
      platform="default"
      placeholder={placeholder}
      placeholderTextColor="#a5a5a5"      
      showLoading={loading}
      containerStyle={style.container}
      inputContainerStyle={style.input}
      inputStyle={style.inputStyle}
      onChangeText={ (text: string) => setValue(text) }
      value={value}
      onSubmitEditing={() => {
        setLoading(true);
        buscaPaciente();
        Keyboard.dismiss();
      }}     
      onClear={() => setValue('')}
    />
  );  
}
