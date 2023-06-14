
import React from 'react';
import { useColorScheme, View, StyleSheet, Dimensions } from 'react-native';
import ScrollList from './src/components/ScrollList';

function App(): JSX.Element {
  const theme = useColorScheme();

  return (
    <View style={styles.mainContainer}>
      <ScrollList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: Dimensions.get('window').width * 0.95,
    marginHorizontal: 'auto',
  },
});

export default App;
