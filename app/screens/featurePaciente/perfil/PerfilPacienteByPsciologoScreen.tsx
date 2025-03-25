import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PacienteRouteProp } from '@/constants/types/PacienteRouteProp';
import { PerfilPacienteStyle } from '@/styles/PerfilPacienteStyle';
import PacienteInfo from './componentes/PacienteInfo';
import RelatoItem from './componentes/RelatoItem';
import AnotacaoProvider from '@/app/provider/AnotacaoProvider';
import { PieChart } from 'react-native-chart-kit';
import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import BackButton from '@/common/BackButton';


const { width } = Dimensions.get('window');

const PerfilPacienteByPsciologoScreen = () => {
  const route = useRoute<PacienteRouteProp>();
  const pacienteInfo = route.params?.pacienteInfo;

  const [anotacoes, setAnotacoes] = useState<AnotacaoPacienteModel[]>([]);
  const [emocaoPredominante, setEmocaoPredominante] = useState<any[]>([]);

  const buscarAnotacoesPacienteAtualSelecioando = () => {
    if (pacienteInfo) {
      const { idPaciente } = pacienteInfo;
      AnotacaoProvider.obterListaAnotacoesPaciente(idPaciente).then((anotacoes) => {
        setAnotacoes(anotacoes);
        calcularEmocaoPredominante(anotacoes);
      });
    }
  };

  const calcularEmocaoPredominante = (anotacoes: AnotacaoPacienteModel[]) => {
    const contagem: Record<string, number> = {};

    anotacoes.forEach((anotacao) => {
      if (anotacao.emocaoEstimada) {
        contagem[anotacao.emocaoEstimada] = (contagem[anotacao.emocaoEstimada] || 0) + 1;
      }
    });

    const dadosGrafico = Object.keys(contagem).map((key) => ({
      name: key,
      population: contagem[key],
      color: getRandomColor(),
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }));

    setEmocaoPredominante(dadosGrafico);
  };

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  useEffect(() => {
    if (pacienteInfo) {
      buscarAnotacoesPacienteAtualSelecioando();
    }
  }, [pacienteInfo]);

  if (!pacienteInfo) {
    return (
      <View style={PerfilPacienteStyle.container}>
        <Text>Informações do paciente não disponíveis.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={PerfilPacienteStyle.scrollContainer}>
      <View style={PerfilPacienteStyle.container}>
        <BackButton /> {/*Remover esse componente na versao final*/}
        <PacienteInfo pacienteInfo={pacienteInfo} />
        <EmocaoPredominanteChart data={emocaoPredominante} />
        <RelatosSection anotacoes={anotacoes} />
      </View>
    </ScrollView>
  );
};

const EmocaoPredominanteChart = ({ data }: { data: any[] }) => {
  return (
    <View style={PerfilPacienteStyle.graficoContainer}>
      <Text style={PerfilPacienteStyle.title}>Emoção Predominante</Text>
      <PieChart
        data={data}
        width={width - 40}
        height={180}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffdd00",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 }
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const RelatosSection = ({ anotacoes }: { anotacoes: AnotacaoPacienteModel[] }) => {
  return (
    <View style={PerfilPacienteStyle.reports}>
      <Text style={PerfilPacienteStyle.title}>Relatos</Text>
      <FlatList
        data={anotacoes}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => <RelatoItem anotacao={item} />}
      />
    </View>
  );
};

export default PerfilPacienteByPsciologoScreen;
