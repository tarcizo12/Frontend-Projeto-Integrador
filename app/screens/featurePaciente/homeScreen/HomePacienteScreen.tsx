import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/components/AddButton';
import AnotacaoModal from './componentes/AnotacaoModal';
import RenderCellsAnotacoes from './componentes/RenderCellsAnotacoes';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';

const ID_PACIENTE_MOCK = 1
const MOCK_ANOTACOES: AnotacaoPacienteModel[] = AnotacaoPacienteMockFactory.criarListaMockAnotacoes();

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listaAnotacoesAtual, setListaAnotacoesAtual] = useState<AnotacaoPacienteModel[]>(MOCK_ANOTACOES)

  
  //const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(()=>{
    AnotacaoProvider.obterListaAnotacoesPaciente(ID_PACIENTE_MOCK).then((res: AnotacaoPacienteModel[])=>{
      console.log("reposta das anotacoes:", res)
      setListaAnotacoesAtual(res)
    })
  },[])


  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Minhas anotações" />
      <SearchBarPacientes placeholder="Buscar anotação"/>
      <RenderCellsAnotacoes anotacoes={listaAnotacoesAtual}></RenderCellsAnotacoes>
      <AddButton onPress={() => setModalVisible(true)} />
      <AnotacaoModal visible={modalVisible} setVisibleFalseModal={()=> setModalVisible(false)}/>
    </View>
  );
}



