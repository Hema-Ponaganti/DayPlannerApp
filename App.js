import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import DayPlanScreen from './screens/DayPlanScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DayPlan" component={DayPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
