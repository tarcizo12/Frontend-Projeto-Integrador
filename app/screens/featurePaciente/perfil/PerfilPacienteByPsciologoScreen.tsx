import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PacienteRouteProp } from '@/constants/types/PacienteRouteProp';
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

  useEffect(() => {
    if (pacienteInfo) {
      AnotacaoProvider.obterListaAnotacoesPaciente(pacienteInfo.idPaciente).then((anotacoes) => {
        setAnotacoes(anotacoes || []);
        calcularEmocaoPredominante(anotacoes || []);
      });
    }
  }, [pacienteInfo]);

  const calcularEmocaoPredominante = (anotacoes: AnotacaoPacienteModel[]) => {
    const contagem: Record<string, number> = {};

    anotacoes.forEach((anotacao) => {
      const emocao = anotacao.emocaoEstimada;
      if (emocao && typeof emocao === 'string') {
        contagem[emocao] = (contagem[emocao] || 0) + 1;
      }
    });

    const dadosGrafico = Object.keys(contagem).map((key) => ({
      name: key,
      population: contagem[key],
      color: corEmocao[key as keyof typeof corEmocao] || getRandomColor(),
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));

    setEmocaoPredominante(dadosGrafico);
  };

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

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
        <BackButton />
        <PacienteInfo pacienteInfo={pacienteInfo} />
        <EmocaoPredominanteChart data={emocaoPredominante} />
        <RelatosSection anotacoes={anotacoes} />
      </View>
    </ScrollView>
  );
};

const corEmocao: { [key: string]: string } = {
  Empolgacao: '#FFA500',
  Excitacao: '#FF69B4',
  Felicidade: '#FFFF00',
  Tristeza: '#4682B4',
  Raiva: '#B22222',
  Medo: '#2F4F4F',
  Surpresa: '#DA70D6',
  Entusiasmo: '#00BFFF',
};

const EmocaoPredominanteChart = ({ data }: { data: any[] }) => {
  if (!data.length) {
    return <Text style={{ textAlign: 'center', marginVertical: 20 }}>Sem dados para o gráfico</Text>;
  }

  const chartData = data.map((item) => ({
    name: item.name,
    population: item.population,
    color: corEmocao[item.name] ,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  return (
    <View style={PerfilPacienteStyle.graficoContainer}>
      <PieChart
        data={chartData}
        width={width - 40}
        height={180}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffdd00',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
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
  if (!anotacoes.length) {
    return <Text style={{ marginTop: 10 }}>Nenhum relato encontrado.</Text>;
  }

  return (
    <View style={PerfilPacienteStyle.reports}>
      <Text style={PerfilPacienteStyle.title}>Relatos</Text>
      <FlatList
        data={anotacoes}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => <RelatoItem anotacao={item} />}
        keyExtractor={(item) => item.idAnotacao?.toString() || Math.random().toString()}
      />
    </View>
  );
};

const PerfilPacienteStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  graficoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reports: {
    marginTop: 20,
    height: 220,
  },
});

export default PerfilPacienteByPsciologoScreen;
