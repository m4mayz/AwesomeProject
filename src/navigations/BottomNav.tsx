import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movie from '../screens/MovieListScreen';
import Music from '../screens/MusicListScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  routeName,
  focused,
}: {
  routeName: string;
  focused: boolean;
}) => {
  let iconName = 'home';
  if (routeName === 'Movie') {
    iconName = 'film';
  } else if (routeName === 'Music') {
    iconName = 'music';
  }
  return (
    <FontAwesome
      name={iconName}
      size={24}
      color={focused ? '#007AFF' : '#8e8e93'}
    />
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => (
          <TabIcon routeName={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="Music" component={Music} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export default BottomNav;
