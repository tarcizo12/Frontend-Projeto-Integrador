import React, { useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { SearchBar } from '@rneui/base';


export default function SearchBarPacientes({ placeholder }: { placeholder: string}) {
  const { width } = Dimensions.get('window');

    const style = {
    input: {
      backgroundColor: '#F6F7FB',
      borderRadius: 30,
    },

    container: {
      width: width * 0.94,
      backgroundColor: '#ffffff0',
      borderBottomWidth: 0,
      borderTopWidth: 0,    
      marginBotton: 20
    },

    inputStyle: {
      color: '#000000',
    },
  };

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
