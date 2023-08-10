import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import EntregaScreen from './src/screens/entrega';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Cozinha' }}
        />
        <Stack.Screen
          name="EntregaScreen"
          component={EntregaScreen}
          options={{ title: 'Entregas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}