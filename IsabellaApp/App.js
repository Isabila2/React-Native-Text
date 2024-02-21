import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>

      <View style={styles.secondaryContainer}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'end' }}>Isabella Texeira dos Santos</Text>
        <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 25, textAlign: 'start', borderWidth: 1, borderColor: 'red' }}>Número: 20</Text>
        <Text style={{ color: 'black', fontSize: 20, backgroundColor: 'pink', textAlign: 'center' }}>Sala 7</Text>
        <Text style={{ color: 'black', fontSize: 15, backgroundColor: '#c8a2c8', textAlign: 'center', fontWeight: 'bold', borderWidth: 1, borderColor: 'purple' }}>#AMOSENAI</Text>
      </View>

      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

