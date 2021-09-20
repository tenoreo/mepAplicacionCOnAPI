import React from 'react';
import { StyleSheet } from 'react-native';

import './src/Constants/config/keys'
import NavigatorInicio from './src/navigators/NavigatorInicio';

export default function App() {
  return (
    <NavigatorInicio/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
