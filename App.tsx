import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './projects/homeScreen';
import Introduction from './projects/introduction';
import UseState from './projects/useState';
import UseEffect from './projects/useEffect';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          swipeEnabled: true,
          tabBarIndicatorStyle: { backgroundColor: '#007AFF', height: 3 },
          tabBarStyle: { backgroundColor: '#ffffff' },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8e8e93',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Introduction" component={Introduction} />
        <Tab.Screen name="UseState" component={UseState} />
        <Tab.Screen name="UseEffect" component={UseEffect} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
