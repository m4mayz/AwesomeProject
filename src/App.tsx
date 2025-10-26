import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './navigations/BottomNav';
import MovieDetailScreen from './screens/MovieDetailScreen';
import MusicDetailScreen from './screens/MusicDetailScreen';

export type RootStackParamList = {
  Main: undefined;
  MovieDetail: { id: string; title?: string };
  MusicDetail: { id: string; name?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={({ route }) => ({ title: route.params?.title || 'Detail' })}
        />
        <Stack.Screen
          name="MusicDetail"
          component={MusicDetailScreen}
          options={({ route }) => ({ title: route.params?.name || 'Detail' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
