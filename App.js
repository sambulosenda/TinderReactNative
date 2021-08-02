import {BackgroundColor} from 'chalk';
import React from 'react';
import Card from './src/components/TinderCard';
import {StyleSheet, View} from 'react-native';
import users from './assets/data/users';

const App = () => {
  return (
    <View style={styles.pagecontainer}>
      <Card user={users[0]} />
      <Card />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  pagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
