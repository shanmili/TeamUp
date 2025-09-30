import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const TeamCard = ({ team, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>{team.icon}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.teamName}>{team.name}</Text>
          <Text style={styles.teamSubtitle}>{team.subtitle}</Text>
          <Text style={styles.description}>{team.description}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>👥 {team.members} members</Text>
            <Text style={styles.categoryText}>• {team.category}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </View>
    </TouchableOpacity>
  );
};

export default TeamCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: COLORS.white, borderRadius: 12,
    padding: SIZES.padding, marginBottom: SIZES.margin,
    elevation: 2, shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1, shadowRadius: 2.84,
  },
  leftSection: { flex: 1, flexDirection: 'row', alignItems: 'flex-start' },
  iconContainer: {
    width: 48, height: 48, borderRadius: 12,
    backgroundColor: COLORS.lightGray, alignItems: 'center',
    justifyContent: 'center', marginRight: SIZES.margin,
  },
  iconText: { fontSize: 20 },
  textContainer: { flex: 1 },
  teamName: { fontSize: 16, fontWeight: '600', color: COLORS.dark, marginBottom: 2 },
  teamSubtitle: { fontSize: 14, color: COLORS.gray, marginBottom: 4 },
  description: { fontSize: 13, color: COLORS.gray, marginBottom: 6, lineHeight: 18 },
  infoRow: { flexDirection: 'row', alignItems: 'center' },
  infoText: { fontSize: 12, color: COLORS.gray },
  categoryText: { fontSize: 12, color: COLORS.gray, marginLeft: 6 },
  rightSection: { paddingLeft: SIZES.margin },
});