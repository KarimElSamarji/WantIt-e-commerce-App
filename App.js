import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen'
import Search from './pages/Search';
import Results from './pages/Results';
import ProductInfo from './pages/ProductInfo';
import Splash from './pages/Splash';
import Profile from './pages/Profile';
import InfoPage from './pages/InfoPage';




const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Info" component={InfoPage} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="ProductInfo" component={ProductInfo}/>
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06283D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
