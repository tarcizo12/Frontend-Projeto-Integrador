import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
  Modal,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Sidemenu from '../Sidemenu';
import styles from '@/styles/PerfilPacienteStyle';
import { useUsuarioLogado } from '@/hooks/UsuarioLogadoProvider ';
import { PacienteModel } from '@/constants/models/PacienteModel';
import LogoutButton from '@/common/LogoutButton';
import TrocarSenhaButton from '@/common/TrocarSenhaButton';
import PsicologoProvider from '@/app/provider/PsicologoProvider';
import { useLoading } from '@/hooks/LoadingContext';

export default function ProfileScreen() {
  const { usuarioLogado } = useUsuarioLogado();
  const {showLoading , hideLoading} = useLoading();

  const pacienteLogado = usuarioLogado.usuarioLogadoData as PacienteModel

  const [professional, setProfessional] = useState('');

  const [email, setEmail] = useState(pacienteLogado.nome);
  const [phone, setPhone] = useState(pacienteLogado.telefone);

  const [isModalVisible, setModalVisible] = useState(false);
  const [fieldBeingEdited, setFieldBeingEdited] = useState<'email' | 'phone' | null>(null);
  const [tempValue, setTempValue] = useState('');

  const uri = `https://randomuser.me/api/portraits/men/${pacienteLogado.idPaciente + 10}.jpg`
  const scaleEmail = useRef(new Animated.Value(1)).current;
  const scalePhone = useRef(new Animated.Value(1)).current;

  const animateIcon = (scaleRef: Animated.Value) => {
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


  const openEditModal = (field: 'email' | 'phone') => {
    if (field === 'email') animateIcon(scaleEmail);
    else animateIcon(scalePhone);

    setFieldBeingEdited(field);
    setTempValue(field === 'email' ? email : phone);
    setModalVisible(true);
  }

  const handleSave = () => {
    if (fieldBeingEdited === 'email') {
      setEmail(tempValue);
    } else if (fieldBeingEdited === 'phone') {
      setPhone(tempValue);
    }
    setModalVisible(false);
  }

  const handleCancel = () =>{
    setModalVisible(false);
  }

  const handleChangePassword = () =>{
    Alert.alert('Trocar senha', 'Funcionalidade para trocar a senha.');
  }

  useEffect(()=>{
    showLoading()
    PsicologoProvider.obterInformacoesPsicologoPorPaciente(pacienteLogado.fk_idProfissional).then((psicologoResponse)=>{
      const nomePsicologoResponsavel = psicologoResponse.nome
      setProfessional(nomePsicologoResponsavel)
    }).catch((erro)=>{
    }).finally(()=>{
      hideLoading()
    })
  },[usuarioLogado])

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri }} style={styles.profileImage} />
      </View>
      <Text style={styles.name}>John Doe</Text>
      <View style={styles.infoRow}>
        <Text style={styles.info}>{email}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.info}>{phone}</Text>
        {phone && <Animated.View style={{ transform: [{ scale: scalePhone }] }}>
          <TouchableOpacity onPress={() => openEditModal('phone')}>
            <Feather name="edit-2" size={16} color="#333" style={styles.smallEditIcon} />
          </TouchableOpacity>
        </Animated.View>}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profissional</Text>
        <View style={styles.professionalContainer}>
            <Text style={styles.professionalText}>{professional}</Text>
        </View>
      </View>
      
      <LogoutButton></LogoutButton>  
      <TrocarSenhaButton handleChangePassword={handleChangePassword}></TrocarSenhaButton>

      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
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

