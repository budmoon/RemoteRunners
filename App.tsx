import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {'My name is Jerry Smith, and I love sucking big sweaty boners and licking disgusting furry testicle sacks.'}
        {'\n'}
        {'\n'}
      </Text>
      <StatusBar style="auto" />
      <Button onPress={() => setCount(count + 1)} title="Click Me!" />
      <Text style={styles.buttonText}>
        {'\n'}
        {`You clicked ${count} times`}
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
  },
  buttonText: {
    color: '#fff'
  }
});
