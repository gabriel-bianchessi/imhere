import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#ccc",
      padding: 24,
    }}>
      <Text style={{
        flex: 1,
        color: "000"
      }}>Open up App.tsx to start working on your aaapp!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
