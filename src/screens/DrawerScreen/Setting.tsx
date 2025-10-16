import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

type Props = {
  message: string;
};

const DrawerSetting = ({ message }: Props) => {
  return (
    <View>
      <Text>Settings</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default DrawerSetting;
