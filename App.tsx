import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento</Text>
      <Text style={styles.eventDate}>Sábado, 10 de junho</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    marginTop: 48,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  }
})