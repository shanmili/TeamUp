import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

const SideMenu = ({ visible, onClose, onApplicantsPress }) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.menuContainer}>
          {/* Profile */}
          <View style={styles.profileSection}>
            <View style={styles.profileAvatar} />
            <Text style={styles.profileName}>Profile</Text>
            <Text style={styles.profileRole}>Researcher</Text>
          </View>

          {/* Menu items */}
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={onApplicantsPress}
            >
              <View style={styles.menuItemWithBadge}>
                <Text style={styles.menuItemText}>Applicants</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Logout */}
          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  menuContainer: {
    width: 280, backgroundColor: COLORS.white, flex: 1,
    paddingTop: 60, paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: 'center', paddingVertical: 40,
    borderBottomWidth: 1, borderBottomColor: COLORS.lightGray,
  },
  profileAvatar: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: COLORS.lightGray, marginBottom: 16,
  },
  profileName: { fontSize: 20, fontWeight: '600', color: COLORS.dark, marginBottom: 4 },
  profileRole: { fontSize: 14, color: COLORS.gray },
  menuItems: { flex: 1, paddingTop: 30 },
  menuItem: {
    paddingVertical: 16, paddingHorizontal: 20,
    borderWidth: 1, borderColor: COLORS.gray,
    borderRadius: 8, marginBottom: 12,
  },
  menuItemText: { fontSize: 16, color: COLORS.dark, textAlign: 'center' },
  menuItemWithBadge: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  badge: {
    backgroundColor: COLORS.error, borderRadius: 10,
    width: 20, height: 20, alignItems: 'center', justifyContent: 'center',
    marginLeft: 8,
  },
  badgeText: { color: COLORS.white, fontSize: 12, fontWeight: '600' },
  bottomSection: { paddingBottom: 40 },
  logoutButton: {
    paddingVertical: 12, paddingHorizontal: 24,
    backgroundColor: COLORS.lightGray, borderRadius: 8, alignSelf: 'center',
  },
  logoutText: { fontSize: 16, color: COLORS.dark },
});
