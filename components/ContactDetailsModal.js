import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

const ContactDetailsModal = ({ visible, onClose, applicant }) => {
  if (!applicant) return null;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.modalContainer}>
          <View style={styles.contactsWrapper}>
            <View style={styles.contactCard}>
              <View style={styles.iconContainer}>
                <Ionicons name="person" size={20} color={COLORS.white} />
              </View>
              <Text style={styles.contactText}>{applicant.fullName}</Text>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.iconContainer}>
                <Ionicons name="logo-facebook" size={20} color={COLORS.white} />
              </View>
              <Text style={styles.contactText}>{applicant.socialHandle}</Text>
            </View>

            <View style={styles.contactCard}>
              <View style={styles.iconContainer}>
                <Ionicons name="mail" size={20} color={COLORS.white} />
              </View>
              <Text style={styles.contactText}>{applicant.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ContactDetailsModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  backdrop: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
  },
  modalContainer: {
    width: '100%', maxWidth: 300,
  },
  contactsWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 16,
  },
  contactCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#2D7D5B',
    borderRadius: 15, paddingVertical: 16, paddingHorizontal: 20, marginBottom: 12,
  },
  iconContainer: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center', justifyContent: 'center', marginRight: 16,
  },
  contactText: {
    flex: 1, fontSize: 16, fontWeight: '500', color: COLORS.white,
  },
});