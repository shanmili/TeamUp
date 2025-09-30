import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { APPLICANTS } from '../constants/mockData';
import { COLORS } from '../constants/theme';
import ContactDetailsModal from './ContactDetailsModal';

const ApplicantsScreen = ({ visible, onClose }) => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showContactDetails, setShowContactDetails] = useState(false);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  const handleApplicantPress = (applicant) => {
    setSelectedApplicant(applicant);
    setShowContactDetails(true);
  };

  const handleContactDetailsClose = () => {
    setShowContactDetails(false);
    setSelectedApplicant(null);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color={COLORS.white} />
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <Text style={styles.headerDate}>Today</Text>
            <Text style={styles.headerSubDate}>{currentDate}</Text>
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Applicants</Text>
        </View>

        {/* Applicants list */}
        <ScrollView style={styles.content}>
          {APPLICANTS.map((applicant) => (
            <TouchableOpacity
              key={applicant.id}
              style={styles.applicantCard}
              activeOpacity={0.7}
              onPress={() => handleApplicantPress(applicant)}
            >
              <View style={styles.applicantInfo}>
                <View style={styles.applicantAvatar}>
                  <Text style={styles.avatarText}>{applicant.avatar}</Text>
                </View>
                <Text style={styles.applicantName}>{applicant.name}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Contact details modal */}
        <ContactDetailsModal
          visible={showContactDetails}
          onClose={handleContactDetailsClose}
          applicant={selectedApplicant}
        />
      </View>
    </Modal>
  );
};

export default ApplicantsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: {
    backgroundColor: '#2D7D5B',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  closeButton: {
    width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: COLORS.white,
    alignItems: 'center', justifyContent: 'center', marginTop: 5,
  },
  headerContent: { flex: 1, alignItems: 'center', marginTop: 5 },
  headerDate: { color: COLORS.white, fontSize: 18, fontWeight: '600' },
  headerSubDate: { color: COLORS.white, fontSize: 14, opacity: 0.8 },
  titleContainer: { backgroundColor: '#2D7D5B', paddingHorizontal: 20, paddingBottom: 20 },
  title: { color: COLORS.white, fontSize: 24, fontWeight: '600' },
  content: { flex: 1, padding: 20 },
  applicantCard: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray, borderRadius: 12,
    padding: 16, marginBottom: 12,
  },
  applicantInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  applicantAvatar: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#FF6B6B',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  avatarText: { fontSize: 20 },
  applicantName: { fontSize: 16, fontWeight: '500', color: COLORS.dark },
  footer: { padding: 20, alignItems: 'center' },
  doneButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1, borderColor: '#2D7D5B', borderRadius: 25,
    paddingVertical: 12, paddingHorizontal: 40,
  },
  doneButtonText: { color: '#2D7D5B', fontSize: 16, fontWeight: '500' },
});