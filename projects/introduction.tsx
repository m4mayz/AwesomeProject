import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  background: '#ecf0f1',
  text: '#2c3e50',
};

const App = () => {
  function alert(message: string): void {
    Alert.alert('Alert', message);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introduction</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a
        laboriosam eaque consequuntur quidem labore dignissimos sed cupiditate,
        itaque doloremque, odio voluptatibus, ipsa non mollitia adipisci quae
        dolore architecto soluta!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Button Pressed!')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBlockStart: 60,
    color: colors.primary,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: colors.text,
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
