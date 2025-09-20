/**
 * Troll Calculator React Native App
 * by Akmal Zaidan
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent isDarkMode={isDarkMode} />
    </SafeAreaProvider>
  );
}

function AppContent({ isDarkMode }: { isDarkMode: boolean }) {
  const safeAreaInsets = useSafeAreaInsets();
  const [display, setDisplay] = useState('0');
  const [showTroll, setShowTroll] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const handleNumberPress = (num: string) => {
    if (showTroll) {
      setDisplay('0');
      setShowTroll(false);
    }

    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorPress = (operator: string) => {
    if (showTroll) {
      setDisplay('0');
      setShowTroll(false);
    }

    setDisplay(display + ' ' + operator + ' ');
  };

  const handleEqualsPress = () => {
    // Instead of calculating, show "Hello World"
    setDisplay('Hello World');
    setShowTroll(true);
  };

  const handleClearPress = () => {
    setDisplay('0');
    setShowTroll(false);
  };

  const handleDeletePress = () => {
    if (showTroll) {
      setDisplay('0');
      setShowTroll(false);
      return;
    }

    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const Button = ({ title, onPress, style, textStyle: btnTextStyle }: any) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, btnTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        backgroundStyle,
        { paddingTop: safeAreaInsets.top },
      ]}
    >
      {/* Title */}
      <Text style={[styles.title, textStyle]}>Kalkulator by Akmal Zaidan</Text>

      {/* Display */}
      <View
        style={[
          styles.displayContainer,
          { backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff' },
        ]}
      >
        <Text
          style={[
            styles.displayText,
            {
              color: showTroll ? '#ff6b6b' : isDarkMode ? '#ffffff' : '#000000',
            },
          ]}
          numberOfLines={2}
        >
          {display}
        </Text>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        {/* Row 1 - Clear, Delete, Empty, Divide */}
        <View style={styles.buttonRow}>
          <Button
            title="C"
            onPress={handleClearPress}
            style={styles.operatorButton}
            textStyle={styles.operatorText}
          />
          <Button
            title="⌫"
            onPress={handleDeletePress}
            style={styles.operatorButton}
            textStyle={styles.operatorText}
          />
          <Button title="" style={styles.emptyButton} />
          <Button
            title="÷"
            onPress={() => handleOperatorPress('÷')}
            style={styles.operatorButton}
            textStyle={styles.operatorText}
          />
        </View>

        {/* Row 2 - 7, 8, 9, Multiply */}
        <View style={styles.buttonRow}>
          <Button
            title="7"
            onPress={() => handleNumberPress('7')}
            style={styles.numberButton}
          />
          <Button
            title="8"
            onPress={() => handleNumberPress('8')}
            style={styles.numberButton}
          />
          <Button
            title="9"
            onPress={() => handleNumberPress('9')}
            style={styles.numberButton}
          />
          <Button
            title="×"
            onPress={() => handleOperatorPress('×')}
            style={styles.operatorButton}
            textStyle={styles.operatorText}
          />
        </View>

        {/* Row 3 - 4, 5, 6, Subtract */}
        <View style={styles.buttonRow}>
          <Button
            title="4"
            onPress={() => handleNumberPress('4')}
            style={styles.numberButton}
          />
          <Button
            title="5"
            onPress={() => handleNumberPress('5')}
            style={styles.numberButton}
          />
          <Button
            title="6"
            onPress={() => handleNumberPress('6')}
            style={styles.numberButton}
          />
          <Button
            title="−"
            onPress={() => handleOperatorPress('−')}
            style={styles.operatorButton}
            textStyle={styles.operatorText}
          />
        </View>

        {/* Row 4 - 1, 2, 3, Add */}
        <View style={styles.buttonRow}>
          <Button
            title="1"
            onPress={() => handleNumberPress('1')}
            style={styles.numberButton}
          />
          <Button
            title="2"
            onPress={() => handleNumberPress('2')}
            style={styles.numberButton}
          />
          <Button
            title="3"
            onPress={() => handleNumberPress('3')}
            style={styles.numberButton}
          />
          <Button
            title="+"
            onPress={() => handleOperatorPress('+')}
            style={styles.operatorButton}
            textStyle={styles.operatorText}
          />
        </View>

        {/* Row 5 - 0, Decimal, Empty, Equals */}
        <View style={styles.buttonRow}>
          <Button
            title="0"
            onPress={() => handleNumberPress('0')}
            style={[styles.numberButton, styles.zeroButton]}
          />
          <Button
            title="."
            onPress={() => handleNumberPress('.')}
            style={styles.numberButton}
          />
          <Button title="" style={styles.emptyButton} />
          <Button
            title="="
            onPress={handleEqualsPress}
            style={styles.equalsButton}
            textStyle={styles.equalsText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  displayContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    minHeight: 80,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  displayText: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'right',
  },
  buttonsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    height: 70,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '400',
  },
  numberButton: {
    backgroundColor: '#e0e0e0',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  operatorText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  equalsButton: {
    backgroundColor: '#ff9500',
  },
  equalsText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 28,
  },
  zeroButton: {
    flex: 2,
    marginRight: 5,
  },
  emptyButton: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
});

export default App;
