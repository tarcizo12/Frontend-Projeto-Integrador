import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Modal,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Sidemenu from '../Sidemenu';
import perfilPhoto from '../../../icons/perfilPhoto.jpg'; // Substitua pelo caminho correto da imagem

export default function ProfileScreen() {
  const [code, setCode] = useState('');
  const [professional, setProfessional] = useState('Julie Smith, Psychologist');

  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('(123) 456-7890');

  const [isModalVisible, setModalVisible] = useState(false);
  const [fieldBeingEdited, setFieldBeingEdited] = useState<'email' | 'phone' | null>(null);
  const [tempValue, setTempValue] = useState('');

  const scalePhoto = useRef(new Animated.Value(1)).current;
  const scaleEmail = useRef(new Animated.Value(1)).current;
  const scalePhone = useRef(new Animated.Value(1)).current;

  function animateIcon(scaleRef: Animated.Value) {
    Animated.sequence([
      Animated.timing(scaleRef, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleRef, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function handleEditPhoto() {
    animateIcon(scalePhoto);
    Alert.alert('Editar Foto', 'Funcionalidade para editar a foto.');
  }

  function openEditModal(field: 'email' | 'phone') {
    if (field === 'email') animateIcon(scaleEmail);
    else animateIcon(scalePhone);

    setFieldBeingEdited(field);
    setTempValue(field === 'email' ? email : phone);
    setModalVisible(true);
  }

  function handleSave() {
    if (fieldBeingEdited === 'email') {
      setEmail(tempValue);
    } else if (fieldBeingEdited === 'phone') {
      setPhone(tempValue);
    }
    setModalVisible(false);
  }

  function handleCancel() {
    setModalVisible(false);
  }

  function handleChangePassword() {
    Alert.alert('Trocar senha', 'Funcionalidade para trocar a senha.');
  }

  function handleRemoveProfessional() {
    Alert.alert('Desvincular', 'Profissional removido.');
    setProfessional('');
  }

  function handleConnectProfessional() {
    if (code.trim()) {
      setProfessional('Novo Profissional (exemplo)');
      setCode('');
      Alert.alert('Sucesso', 'Profissional vinculado.');
    } else {
      Alert.alert('Erro', 'Digite um código válido.');
    }
  }

  function handleLogout() {
    Alert.alert('Sair', 'Você saiu do app.');
  }

  function handleEditEmail() {
    Alert.alert('Editar Email', 'Funcionalidade para editar o email.');
  }

  function handleEditPhone() {
    Alert.alert('Editar Telefone', 'Funcionalidade para editar o telefone.');
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: perfilPhoto }} style={styles.profileImage} />

        <Animated.View style={[styles.editIcon, { transform: [{ scale: scalePhoto }] }]}>
          <TouchableOpacity onPress={handleEditPhoto}>
            <Feather name="edit-2" size={18} color="#333" />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <Text style={styles.name}>John Doe</Text>

      <View style={styles.infoRow}>
        <Text style={styles.info}>{email}</Text>
        <Animated.View style={{ transform: [{ scale: scaleEmail }] }}>
          <TouchableOpacity onPress={() => openEditModal('email')}>
            <Feather name="edit-2" size={16} color="#333" style={styles.smallEditIcon} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.info}>{phone}</Text>
        <Animated.View style={{ transform: [{ scale: scalePhone }] }}>
          <TouchableOpacity onPress={() => openEditModal('phone')}>
            <Feather name="edit-2" size={16} color="#333" style={styles.smallEditIcon} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Trocar Senha</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profissional</Text>
        {professional ? (
          <View style={styles.professionalContainer}>
            <Text style={styles.professionalText}>{professional}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={handleRemoveProfessional}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.connectContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o código"
              value={code}
              onChangeText={setCode}
            />
            <TouchableOpacity style={styles.connectButton} onPress={handleConnectProfessional}>
              <Text style={styles.connectButtonText}>Conectar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair do App</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Editar {fieldBeingEdited === 'email' ? 'Email' : 'Telefone'}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={tempValue}
              onChangeText={setTempValue}
              keyboardType={fieldBeingEdited === 'phone' ? 'phone-pad' : 'email-address'}
              autoCapitalize="none"
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButtonCancel} onPress={handleCancel}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </Pressable>
              <Pressable style={styles.modalButtonSave} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.sideMenuContainer}>
        <Sidemenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginTop: 20,
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: 'gray', // Adicione isso temporariamente
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
  },
  smallEditIcon: {
    marginLeft: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButtonCancel: {
    marginRight: 10,
  },
  modalButtonSave: {},
  modalButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },

  button: {
    marginTop: 20,
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  section: {
    width: '100%',
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  professionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  professionalText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  connectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
  },
  connectButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
  },
  connectButtonText: {
    color: '#fff',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
  },
  sideMenuContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
