import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/components/AddButton';
import AnotacaoModal from './components/AnotacaoModal';
import RenderCellsAnotacoes from './components/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { ScrollView } from 'react-native';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';

const ID_PACIENTE_MOCK = 1
const MOCK_ANOTACOES: AnotacaoPacienteModel[] = AnotacaoPacienteMockFactory.criarListaMockAnotacoes(); //Usar caso precisar mockar dnv 

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listaAnotacoesAtual, setListaAnotacoesAtual] = useState<AnotacaoPacienteModel[]>([])

  const atualizaListaAnotacoes = (): void =>{
    AnotacaoProvider.obterListaAnotacoesPaciente(ID_PACIENTE_MOCK).then((res: AnotacaoPacienteModel[])=>{
      setListaAnotacoesAtual(res)
    })
  }

  useEffect(()=>{if(!modalVisible){atualizaListaAnotacoes()}},[modalVisible])

  return (
    <ScrollView contentContainerStyle={PerfilPacienteStyle.scrollContainer}>
      <View style={HomeScreenStyle.container}>
        <CustomText label="Minhas anotações" />
        <SearchBarPacientes placeholder="Buscar anotação"/>
        <RenderCellsAnotacoes anotacoes={listaAnotacoesAtual}></RenderCellsAnotacoes>
        <AddButton onPress={() => setModalVisible(true)} />
        <AnotacaoModal idPaciente={ID_PACIENTE_MOCK} visible={modalVisible} setVisibleFalseModal={()=> setModalVisible(false)}/>
      </View>
    </ScrollView>
  );
}



