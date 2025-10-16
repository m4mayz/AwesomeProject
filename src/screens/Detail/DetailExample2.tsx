import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

interface DatasInterface {
  id: number;
  name: string;
  age: number;
}

const DetailExample2 = () => {
  const route = useRoute();
  const { data } = route.params as { data: DatasInterface };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Detail Example 2</Text>
      <Text>ID: {data.id}</Text>
      <Text>Name: {data.name}</Text>
      <Text>Age: {data.age}</Text>
    </View>
  );
};

export default DetailExample2;
