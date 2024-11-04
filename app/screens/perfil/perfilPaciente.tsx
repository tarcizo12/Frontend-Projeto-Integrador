import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const PerfilPaciente = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: 'https://via.placeholder.com/150' }}
            />
            <Text style={styles.name}>Nome do Paciente</Text>
            <Text style={styles.info}>Idade: 30</Text>
            <Text style={styles.info}>Gênero: Masculino</Text>
            <Text style={styles.info}>Contato: (11) 1234-5678</Text>
            <Button title="Editar Perfil" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default PerfilPaciente;