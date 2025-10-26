import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './projects/task4/navigation/AppNavigator';
// import HomeScreen from './projects/homeScreen';
// import DetailPage from './projects/DetailPage';

// import TestApp from './src/App';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
