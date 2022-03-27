import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>My name is Jerry Smith, and I love sucking big sweaty boners and licking disgusting furry testicle sacks.</Text>
      <StatusBar style="auto" />
      <Button onPress={() => setCount(count + 1)} title="Click Me!" />
      <Text>You clicked {count} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
