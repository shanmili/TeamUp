import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: '#2D7D5B',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  headerDate: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  headerSubDate: {
    color: COLORS.white,
    fontSize: 14,
    opacity: 0.8,
  },
  titleContainer: {
    backgroundColor: '#2D7D5B',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  applicantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  applicantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  applicantAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
  },
  applicantName: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#2D7D5B',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  doneButtonText: {
    color: '#2D7D5B',
    fontSize: 16,
    fontWeight: '500',
  },
});