import React from 'react';
import { Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { PacienteMockFactory } from '@/constants/mock/PacienteMockFactory';
import { PacienteModel } from '@/constants/models/PacienteModel';
import CustomPacienteCell from './CustomPacienteCell';
import SearchBarPacientes from '@/components/SearchBarPacientes';
import ListPacientesStyle from '@/styles/ListPacientesStyle';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type PacienteInfo = {
  name: string;
  photo: string;
  email: string;
};

export type RootStackParamList = {
  Home: undefined;
  Paciente: { pacienteInfo: PacienteInfo } | undefined;
};


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
      borderBottomWidth: 0,
      borderTopWidth: 0,  
      marginTop: -250    
    },

    inputStyle: {
      color: '#000000',
    },
  };

   

  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();
  const handleDirecionarParaTelaDoPaciente = (props: PacienteInfo): void => {
    Navigation.navigate('Paciente', { pacienteInfo: props });
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
  

  const mockPacientes: PacienteModel[] = PacienteMockFactory.criarListaMockPacientes()

  const renderCellsPaciente = (pacientes: PacienteModel[]) => {
    return (
      <>
        {pacientes.map((paciente) => (
          <CustomPacienteCell 
            key={paciente.getIdPaciente()}
            nome={paciente.getNome()} dataNascimento={paciente.getDataNascimento().toString()}
            onPress={ ()=> alert(`Paciente selecionado: ${paciente.getNome()}`)}>
          </CustomPacienteCell>
        ))}
      </>
    );
  };
  

  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Acompanhar pacientes" />     
      <SearchBarPacientes placeholder={'Buscar paciente'} style={stylesSearchBar}/>  
      <ScrollView style={ListPacientesStyle.container}>
        {pacientes.map((paciente, index) => (
          <TouchableOpacity 
            key={index}
            onPress={() => handleDirecionarParaTelaDoPaciente(paciente)}
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
