import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

type ContainerRegistroProps = {
  title: string;
  icon?: string;
  date?: string;
  categories: string;
  status: boolean;
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
        {icon && <Text>{icon}</Text>}
      </View>

      <View style={styles.dateRegisterContainer}>
        <Text style={styles.dateTextContainer}>
          {date || new Date().toLocaleDateString('pt-BR')}
        </Text>
      </View>

      <View style={styles.categoriesRegisterContainer}>
        {categories.split(',').map((category, index) => (
          <Text key={index} style={styles.textCategoriesRegisterContainer}>
            {category.trim()}
          </Text>
        ))}
      </View>

      <View style={styles.statusRegisterContainer}>
        <Text style={[
          styles.statusText,
          status ? styles.statusActive : styles.statusInactive
        ]}>
          {status ? 'Visto' : 'Não visto'}
        </Text>
      </View>
    </View>
  );
};

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerRegistro: {
    marginVertical: 10,
    alignItems: 'flex-start',
    width: screenWidth * 0.9,
    height: screenHeight * 0.18,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleRegisterContainer: {
    width: windowWidth * 0.83,
    height: windowHeight * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleTextContainer: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  dateRegisterContainer: {
    marginVertical: 5,
  },
  dateTextContainer: {
    fontSize: 14,
    color: '#666',
  },
  categoriesRegisterContainer: {
    width: screenWidth * 0.83,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  textCategoriesRegisterContainer: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#20A69F',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    overflow: 'hidden',
  },
  statusRegisterContainer: {
    alignSelf: 'flex-end',
    width: screenWidth * 0.83,
    marginTop: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  statusActive: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  statusInactive: {
    backgroundColor: '#F44336',
    color: '#fff',
  },
});

export default ContainerRegistro;