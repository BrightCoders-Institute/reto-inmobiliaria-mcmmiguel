/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme, DarkTheme, defaultTheme, View, Text, StyleSheet, Dimensions } from 'react-native';
import Card from './src/components/Card';

function App(): JSX.Element {
  const theme = useColorScheme();

  return (
    <View style={styles.mainContainer}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: Dimensions.get('window').width * 0.95,
    marginHorizontal: 'auto',
    backgroundColor: 'green',
  },
});

export default App;
