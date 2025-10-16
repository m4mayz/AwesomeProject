import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator';
// import HomeScreen from './projects/homeScreen';
import DetailPage from './projects/DetailPage';

const App = () => {
  return (
    <NavigationContainer>
      <DetailPage />
    </NavigationContainer>
  );
};
export default App;
