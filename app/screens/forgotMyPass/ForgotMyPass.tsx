import ScreenRoutes from '@/constants/ScreenRoutes';
import { RootStackParamList } from '@/constants/types/RootStackParamList';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ForgotMyPass() {
    const navigation: NavigationProp<RootStackParamList> =
        useNavigation<NavigationProp<RootStackParamList>>();
    
    const [email, setEmail] = useState('');

    const handlePasswordReset = () => {
        if (!email) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            return;
        }
        // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação de senha
        Alert.alert('Sucesso', 'Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.');
    };

    const handleBack = () => {
        navigation.navigate(ScreenRoutes.HOME_SCREEN);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Esqueci Minha Senha</Text>
            <Text style={styles.description}>
                Insira o e-mail associado à sua conta para receber instruções de redefinição de senha.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
                <Text style={styles.backButton}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '30%',
        height: 40,
        backgroundColor: '#20a69f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 15,
        color: '#ff0000b0',
        fontSize: 16,
    },
});