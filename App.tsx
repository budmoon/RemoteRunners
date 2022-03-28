import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LobbyScreen from './screens/lobby';

const Stack = createNativeStackNavigator();
const ScreenOptions = {
  headerStyle: {
    backgroundColor: '#07c'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={ScreenOptions} />
        <Stack.Screen name='Lobby' component={LobbyScreen} options={ScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}