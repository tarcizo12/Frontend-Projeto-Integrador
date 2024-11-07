import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../featurePsicologo/HomePsciologoScreen';
import calendar from '../../../icons/calendar.png'
import notes from '../../../icons/notes.png'

type PacienteRouteProp = RouteProp<RootStackParamList, 'Paciente'>;

export default function PerfilPaciente() {
    

    const route = useRoute<PacienteRouteProp>();
    const pacienteInfo = route.params?.pacienteInfo;
    if (!pacienteInfo) {
        return (
            <View style={styles.container}>
                <Text style={styles.info}>Informações do paciente não disponíveis.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: pacienteInfo.photo }} style={styles.profileImage} />
            <Text style={styles.name}>{pacienteInfo.name}</Text>
            <Text style={styles.email}>{pacienteInfo.email}</Text>            
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => console.log('Ver notas')}>
                    <Image source={notes} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Ver relatos')}>
                    <Image source={calendar} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 75,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 18,
        marginBottom: 5,
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },

    icon : {
        width: 30,
        height: 30,
        alignSelf: 'center',
    }
});

// export default PerfilPaciente;