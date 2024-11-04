import React from 'react';
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import ListPacientesStyle from '@/styles/ListPacientesStyle';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function HomePsciologoScreen() {
  const { width } = Dimensions.get('window');

  const stylesSearchBar = {
    input: {
      backgroundColor: '#F6F7FB',
      borderRadius: 30,
    },

    container: {
      width: width * 0.94,
      backgroundColor: '#ffffff0',
      //backgroundColor: 'green',
      borderBottomWidth: 0,
      borderTopWidth: 0,      
    },

    inputStyle: {
      color: '#000000',
    },
  };

  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDirecionarParaTelaDoPaciente = (): void => {
    Navigation.navigate('Paciente');

  };

  const pacientes = [
    {
      name: 'João da Silva Holanda',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'abc@gmail.com'
    },
    {
      name: 'Maria da Silva',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'erteer@gmail.com'
    },
    {
      name: 'José da Silva',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'aajkfadsfs@gmail.com'
    },
    {
      name: 'Ana Paula Oliveira',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'anapaula@gmail.com'
    },
    {
      name: 'Carlos Eduardo Lima',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'carlosedu@gmail.com'
    },
    {
      name: 'Fernanda Souza',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'fernandasouza@gmail.com'
    },
    {
      name: 'Paulo Roberto Almeida',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'pauloroberto@gmail.com'
    },
    {
      name: 'Larissa Costa Santos',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'larissacs@gmail.com'
    },
    {
      name: 'Ricardo Martins',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'ricardomartins@gmail.com'
    },
    {
      name: 'Bianca Ramos',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'biancar@gmail.com'
    },
    {
      name: 'Gustavo Ferreira',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'gferreira@gmail.com'
    },
    {
      name: 'Cláudia Mendes',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'claudia.mendes@gmail.com'
    },
    {
      name: 'João Pedro Alves',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'joaopedro@gmail.com'
    },
    {
      name: 'Mariana Fernandes',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'marianafernandes@gmail.com'
    },
    {
      name: 'Gabriel Costa',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'gabrielcosta@gmail.com'
    },
    {
      name: 'Sofia Oliveira',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'sofiaoliveira@gmail.com'
    },
    {
      name: 'Renato Rodrigues',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'renatorodrigues@gmail.com'
    },
    {
      name: 'Tatiana Souza',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'tatianasouza@gmail.com'
    },
    {
      name: 'Felipe Carvalho',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'felipecarvalho@gmail.com'
    },
    {
      name: 'Camila Andrade',
      photo: 'https://random-image-pepebigotes.vercel.app/api/random-image',
      email: 'camilaandrade@gmail.com'
    }
  ];
  

  return (
    <View style={HomeScreenStyle.container}>
      <View style={HomeScreenStyle.titleContainer}>        
        <CustomText label="Acompanha+" />            
      </View>
      <SearchBarPacientes placeholder={'Buscar paciente'} style={stylesSearchBar}/>  
      <ScrollView style={ListPacientesStyle.container}>
        {pacientes.map((paciente, index) => (
          <TouchableOpacity 
            key={index}
            onPress={() => handleDirecionarParaTelaDoPaciente()}
          >
            <View style={ListPacientesStyle.item}>
              <View>
                <Image
                  source={{ uri: paciente.photo }}
                  style={ListPacientesStyle.itemPhoto}
                />
              </View>
              <View style={ListPacientesStyle.itemInfo}>
                <Text style={ListPacientesStyle.itemText}>{paciente.name}</Text>                
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
);
}
