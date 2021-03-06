import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {'My name is Jerry Smith, and I love sucking big sweaty boners and licking disgusting furry testicle sacks.'}
        {'\n'}
        {'\n'}
      </Text>
      <Button onPress={() => setCount(count + 1)} title="Click Me!" />
      <Text style={styles.buttonText}>
        {'\n'}
        {`You clicked ${count} times`}
        {'\n'}
        {'\n'}
      </Text>
      <Button onPress={() => navigation.navigate('Lobby')} title="Game Lobby" />
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
    color: 'green'
  }
});