import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ApplicantsScreen from '../components/ApplicantsScreen';
import NotificationsModal from '../components/NotificationsModal';
import SideMenu from '../components/SideMenu';
import TeamCard from '../components/TeamCard';
import { TEAMS } from '../constants/mockData';
import { COLORS, SIZES } from '../constants/theme';
import { useTeam } from '../hooks/useTeam';

const FindTeamScreen = () => {
  const { handleTeamPress } = useTeam();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showApplicants, setShowApplicants] = useState(false);

  const handleNotificationPress = (notification) => {
    if (notification.title.includes('Apply in You Group')) {
      setShowNotifications(false);
      setShowApplicants(true);
    }
  };

  const handleApplicantsPress = () => {
    setShowSideMenu(false);
    setShowApplicants(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setShowSideMenu(true)}>
          <Ionicons name="menu" size={24} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.title}>Find Team</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => setShowNotifications(true)}
          >
            <Ionicons name="notifications-outline" size={24} color={COLORS.dark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <View style={styles.avatar} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Teams */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {TEAMS.map((team) => (
          <TeamCard key={team.id} team={team} onPress={() => handleTeamPress(team)} />
        ))}
      </ScrollView>

      {/* Add button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color={COLORS.white} />
      </TouchableOpacity>

      {/* Modals */}
      <NotificationsModal
        visible={showNotifications}
        onClose={() => setShowNotifications(false)}
        onNotificationPress={handleNotificationPress}
      />
      <SideMenu
        visible={showSideMenu}
        onClose={() => setShowSideMenu(false)}
        onApplicantsPress={handleApplicantsPress}
      />
      <ApplicantsScreen
        visible={showApplicants}
        onClose={() => setShowApplicants(false)}
      />
    </View>
  );
};

export default FindTeamScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray,
  },
  menuButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '600', color: COLORS.dark },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  notificationButton: {
    width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 8,
  },
  avatarButton: { width: 32, height: 32 },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: COLORS.gray },
  content: { flex: 1, paddingHorizontal: SIZES.padding, paddingTop: SIZES.padding },
  addButton: {
    position: 'absolute', right: SIZES.padding, bottom: 100,
    width: 56, height: 56, borderRadius: 28, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center',
    elevation: 4, shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84,
  },
});

