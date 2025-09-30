import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

export const useTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTeamPress = useCallback(async (team) => {
    try {
      setLoading(true);
      setSelectedTeam(team);

      setTimeout(() => {
        Alert.alert('Team Selected', `You selected ${team.name}`, [
          { text: 'OK', onPress: () => console.log('Navigating to team:', team.name) },
        ]);
        setLoading(false);
      }, 500);
    } catch (error) {
      Alert.alert('Error', 'Failed to select team');
      setLoading(false);
    }
  }, []);

  const resetSelection = useCallback(() => {
    setSelectedTeam(null);
  }, []);

  return { selectedTeam, loading, handleTeamPress, resetSelection };
};
