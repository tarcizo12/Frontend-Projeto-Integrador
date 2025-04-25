import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Sidemenu from '../../Sidemenu';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Calendar
        markedDates={{
          '2025-04-24': {
            dots: [
              { key: 'consultas', color: 'blue', selectedDotColor: 'blue' },
              { key: 'tarefas', color: 'red', selectedDotColor: 'red' },
            ],
            marked: true,
          },
          '2025-04-25': {
            dots: [
              { key: 'exames', color: 'green', selectedDotColor: 'green' },
            ],
            marked: true,
          },
        }}
        theme={{
            arrowColor: '#20a69f'
        }}
        markingType={'multi-dot'}
      />
    < Sidemenu />
    </View>
  );
}
