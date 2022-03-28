import { StyleSheet, Text, View, Button } from 'react-native';

export default function LobbyScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {'Game Lobby'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  }
});