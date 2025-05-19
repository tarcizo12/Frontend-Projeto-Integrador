import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: '90%', 
      maxHeight: '80%', 
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      elevation: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      height: 100,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    saveButton: {
      backgroundColor: '#6495ED',
      borderRadius: 10,
      padding: 10,
      flex: 1,
      marginRight: 10,
    },
    saveButtonText: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    closeButton: {
      backgroundColor: '#CCCCCC',
      borderRadius: 10,
      padding: 10,
      flex: 1,
    },
    closeButtonText: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default styles