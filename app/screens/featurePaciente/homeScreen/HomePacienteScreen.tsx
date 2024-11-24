import React, { useState } from 'react';
import { View} from 'react-native';
import HomeScreenStyle from '@/styles/HomeScreenStyle';
import CustomText from '@/components/CustomText';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel'; 
import SearchBarPacientes from '@/components/SearchBarPacientes';
import { AnotacaoPacienteMockFactory } from '@/constants/mock/AnotacaoPacienteMockFactory';
import AddButton from '@/components/AddButton';
import AnotacaoModal from './componentes/AnotacaoModal';
import RenderCellsAnotacoes from './componentes/RenderCellsAnotacoes';

export default function HomePacienteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const MOCK_ANOTACOES: AnotacaoPacienteModel[] = AnotacaoPacienteMockFactory.criarListaMockAnotacoes();
  //const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={HomeScreenStyle.container}>
      <CustomText label="Minhas anotações" />
      <SearchBarPacientes placeholder="Buscar anotação"/>
      <RenderCellsAnotacoes anotacoes={MOCK_ANOTACOES}></RenderCellsAnotacoes>
      <AddButton onPress={() => setModalVisible(true)} />
      <AnotacaoModal visible={modalVisible} setVisibleFalseModal={()=> setModalVisible(false)}/>
    </View>
  );
}



