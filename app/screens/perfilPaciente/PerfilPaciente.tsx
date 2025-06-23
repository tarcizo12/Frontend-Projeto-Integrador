import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from '@/styles/PerfilPacienteStyle';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider';
import { PacienteModel } from '@/constants/models/PacienteModel';
import LogoutButton from '@/common/LogoutButton';
import TrocarSenhaButton from '@/common/TrocarSenhaButton';
import PsicologoProvider from '@/app/provider/PsicologoProvider';
import { useLoading } from '@/hooks/LoadingContext';
import { Colors } from '@/constants/Colors';
import { PsicologoModel } from '@/constants/models/PsicologoModel';

export default function ProfileScreen() {
  const { usuarioLogado } = useUsuarioLogado();
  const { showLoading, hideLoading } = useLoading();

  const pacienteLogado = usuarioLogado.usuarioLogadoData as PacienteModel;

  const [professional, setProfessional] = useState<PsicologoModel | null>(null);
  const [name, setName] = useState(pacienteLogado.nome);
  const [email, setEmail] = useState(pacienteLogado.email);
  const [phone, setPhone] = useState(pacienteLogado.telefone);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [fieldBeingEdited, setFieldBeingEdited] = useState<'name' | 'email' | 'phone' | null>(null);
  const [tempValue, setTempValue] = useState('');

  const defaultUri = `https://randomuser.me/api/portraits/men/${pacienteLogado.idPaciente + 10}.jpg`;

  const openEditModal = (field: 'name' | 'email' | 'phone') => {
    setFieldBeingEdited(field);
    setTempValue(field === 'name' ? name : field === 'email' ? email : phone);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (fieldBeingEdited === 'name') {
      setName(tempValue);
    } else if (fieldBeingEdited === 'email') {
      setEmail(tempValue);
    } else if (fieldBeingEdited === 'phone') {
      setPhone(tempValue);
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleChangePassword = () => {
    Alert.alert('Trocar senha', 'Funcionalidade para trocar a senha.');
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
    }
  };

  const getModalTitle = () => {
    switch (fieldBeingEdited) {
      case 'name': return 'Alterar Nome';
      case 'email': return 'Alterar Email';
      case 'phone': return 'Alterar Telefone';
      default: return 'Editar Informação';
    }
  };

  const getKeyboardType = () => {
    switch (fieldBeingEdited) {
      case 'phone': return 'phone-pad';
      case 'email': return 'email-address';
      default: return 'default';
    }
  };

  useEffect(() => {
    showLoading();
    PsicologoProvider.obterInformacoesPsicologoPorPaciente(pacienteLogado.fk_idProfissional)
      .then((psicologo) => setProfessional(psicologo))
      .catch((erro) => { /* Tratar erro */ })
      .finally(hideLoading);
  }, [usuarioLogado]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: profileImage || defaultUri }} 
              style={styles.profileImage} 
            />
            <TouchableOpacity style={styles.editImageButton} onPress={pickImage}>
              <Feather name="camera" size={18} color={Colors.light.tint} />
            </TouchableOpacity>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.editNameButton} onPress={() => openEditModal('name')}>
              <Feather name="edit-2" size={18} color="#adb5bd" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Minha Conta</Text>
          <TouchableOpacity style={styles.infoRow} onPress={() => openEditModal('email')}>
            <View style={styles.infoIconContainer}><Feather name="mail" size={20} color="#adb5bd" /></View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{email}</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#adb5bd" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoRow} onPress={() => openEditModal('phone')}>
            <View style={styles.infoIconContainer}><Feather name="phone" size={20} color="#adb5bd" /></View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Telefone</Text>
              <Text style={styles.infoValue}>{phone}</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#adb5bd" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profissional</Text>
          <View style={styles.professionalRow}>
            <View style={styles.infoIconContainer}><Feather name="heart" size={20} color="#adb5bd" /></View>
            <Text style={styles.professionalName}>{professional?.nome}</Text>
          </View>
        </View>
        
        <View style={styles.section}>
            <TrocarSenhaButton handleChangePassword={handleChangePassword} />
            <View style={styles.separator} />
            <LogoutButton />
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={isModalVisible} onRequestClose={handleCancel}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{getModalTitle()}</Text>
            <TextInput
              style={styles.modalInput}
              value={tempValue}
              onChangeText={setTempValue}
              keyboardType={getKeyboardType()}
              autoCapitalize={fieldBeingEdited === 'name' ? 'words' : 'none'}
              autoFocus
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, styles.modalButtonCancel]} onPress={handleCancel}>
                <Text style={[styles.modalButtonText, styles.modalButtonTextCancel]}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.modalButtonSave]} onPress={handleSave}>
                <Text style={[styles.modalButtonText, styles.modalButtonTextSave]}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

