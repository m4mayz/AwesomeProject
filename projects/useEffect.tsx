import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View style={styles.clockContainer}>
      <Text style={styles.clockText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default Clock;
