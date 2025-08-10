import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BrandDetailScreen from '../screens/BrandDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BrandDetail" component={BrandDetailScreen} options={{ title: 'Brand Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
