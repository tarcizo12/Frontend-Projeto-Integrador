import { RenderCellsPacienteProps } from '@/constants/types/RenderCellsPacienteProps';
import {  ScrollView } from 'react-native';
import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PacienteInfo } from '@/constants/types/PacienteInfo';
import { useEffect, useState } from 'react';
import { PacienteModel } from '@/constants/models/PacienteModel';
import PacienteProvider from '@/app/provider/PacienteProvider';
import { PacienteMockFactory } from '@/constants/mock/PacienteMockFactory';
import CustomPacienteCell from './CustomPacienteCell';


const MOCK_PACIENTES: PacienteModel[] = PacienteMockFactory.criarListaMockPacientes()


const RenderCellsPaciente = ({idPsicologoLogado}: RenderCellsPacienteProps) => {

  const [listaPacientesAtual, setListaPacientesAtual] = useState<PacienteModel[]>(MOCK_PACIENTES)

  const Navigation: NavigationProp<RootStackParamList> = useNavigation<NavigationProp<RootStackParamList>>();
  
  const handleDirecionarParaTelaDoPaciente = (props: PacienteInfo): void => {
    Navigation.navigate(ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO, { pacienteInfo: props });
  };

  useEffect(()=>{
    PacienteProvider.obsterListaPacientesByPsicolog(idPsicologoLogado).then((pacientes: PacienteModel[])=>{
      setListaPacientesAtual(pacientes)
    })
  },[])


    return (
      <ScrollView>
        {listaPacientesAtual.map((paciente) => (
          <CustomPacienteCell
            key={paciente.idPaciente} 
            paciente={paciente}
            onPress={() =>
              handleDirecionarParaTelaDoPaciente({
                name: paciente.nome,
                email: paciente.email,
                idPaciente: paciente.idPaciente
              })
            }
          />
        ))}
      </ScrollView>
    );
  };

export default RenderCellsPaciente;