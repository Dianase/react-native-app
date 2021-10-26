import React from 'react';
import { StyleSheet} from 'react-native';
import Home from './components/Home';
import DetailsScreen from './components/DetailsScreen';
import Coffee from './components/Coffee';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={DetailsScreen}/>
        <Stack.Screen name='Coffee' component={Coffee}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 48,
  },
});
