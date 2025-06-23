import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    position: 'relative',
    borderWidth: 4,
    borderColor: Colors.light.tint,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 65,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
  },
  editNameButton: {
    marginLeft: 10,
    padding: 6,
  },
  section: {
    marginTop: 25,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#495057',
    paddingVertical: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: '#f1f3f5',
  },
  infoIconContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '500',
  },
  editRowButton: {
    padding: 8,
  },
  professionalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  professionalName: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '500',
  },
  actionsContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  separator: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 0,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#212529',
  },
  modalInput: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: '#e9ecef',
  },
  modalButtonSave: {
    backgroundColor: Colors.light.tint,
  },
  modalButtonText: {
    fontWeight: '700',
    fontSize: 16,
  },
  modalButtonTextCancel: {
    color: '#495057',
  },
  modalButtonTextSave: {
    color: '#fff',
  },
});

export default styles;
