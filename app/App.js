import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import FindTeamScreen from '../screens/FindTeamScreen';

export default function App() {
  return (
    
      <SafeAreaView style={{ flex: 1 }}>
        <FindTeamScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    
  );
}