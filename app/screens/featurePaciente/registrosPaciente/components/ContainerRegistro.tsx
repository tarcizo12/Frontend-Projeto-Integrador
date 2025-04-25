import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

type ContainerRegistroProps = {
  title: string;
  icon: string;
  date?: string;
  categories: string[];
  status: string;
};

const ContainerRegistro: React.FC<ContainerRegistroProps> = ({
  title,
  icon,
  date,
  categories,
  status,
}) => {
  return (
    <View style={styles.containerRegistro}>
      <View style={styles.titleRegisterContainer}>
        <Text style={styles.titleTextContainer}>{title}</Text>
        <Text>{icon}</Text>
      </View>

      <View style={styles.dateRegisterContainer}>
        <Text style={styles.dateTextContainer}>{date || new Date().toLocaleDateString()}</Text>
      </View>

      <View style={styles.categoriesRegisterContainer}>
        {categories.map((cat, index) => (
          <View style={styles.textCategoriesRegisterContainer}>
            <Text key={index} style={styles.text}>
              {cat}
              {index !== categories.length - 1}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.statusRegisterContainer}>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerRegistro: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
    width: widthScreen * 0.9,
    height: heightScreen * 0.18,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
  },
  titleRegisterContainer: {
    width: widthWindow * 0.83,
    height: heightWindow * 0.04,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleTextContainer: {
    fontSize: 16
  },
  dateRegisterContainer: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#ffffff',
  },
  dateTextContainer:{
    fontSize: 14
  },
  categoriesRegisterContainer: {
    width: widthScreen * 0.83,
    height: heightWindow * 0.03,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    marginTop: 5,
    marginBottom: 5,
  },
  textCategoriesRegisterContainer: {
    alignSelf: 'center', 
    justifyContent: "center",
    height: heightWindow * 0.027,
    paddingHorizontal: 10,
    backgroundColor: '#20A69F',
    marginRight: 5,
    borderRadius: 15,
  },
  statusRegisterContainer: {
    alignItems: 'flex-end',
    width: widthScreen * 0.83,
    backgroundColor: '#ffffff',
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    color: '#fff',
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default ContainerRegistro;
