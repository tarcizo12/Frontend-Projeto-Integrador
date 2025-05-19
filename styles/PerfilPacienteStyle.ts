import { StyleSheet } from 'react-native';

const PROFILE_IMAGE_SIZE = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  profileImageContainer: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: PROFILE_IMAGE_SIZE / 2,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    overflow: 'hidden', // garante arredondamento total
  },

  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ccc',
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
  sideMenuContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
