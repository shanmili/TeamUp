import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NOTIFICATIONS } from '../constants/mockData';
import { COLORS } from '../constants/theme';

const NotificationsModal = ({ visible, onClose, onNotificationPress }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Notifications</Text>
          </View>

          <ScrollView style={styles.content}>
            {NOTIFICATIONS.map((notification) => (
              <TouchableOpacity
                key={notification.id}
                style={styles.notificationItem}
                activeOpacity={0.7}
                onPress={() => onNotificationPress && onNotificationPress(notification)}
              >
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default NotificationsModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start', alignItems: 'flex-end',
    paddingTop: 80, paddingRight: 20,
  },
  modalContainer: {
    backgroundColor: COLORS.white, borderRadius: 12,
    width: 280, maxHeight: 400,
    elevation: 8, shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 8,
  },
  header: {
    paddingHorizontal: 20, paddingVertical: 16,
    borderBottomWidth: 1, borderBottomColor: COLORS.lightGray,
  },
  title: { fontSize: 18, fontWeight: '600', color: COLORS.dark },
  content: { maxHeight: 300 },
  notificationItem: {
    paddingHorizontal: 20, paddingVertical: 16,
    borderBottomWidth: 1, borderBottomColor: COLORS.lightGray,
  },
  notificationContent: { flex: 1 },
  notificationTitle: { fontSize: 14, color: COLORS.dark, marginBottom: 4, lineHeight: 20 },
  notificationTime: { fontSize: 12, color: COLORS.gray },
});
