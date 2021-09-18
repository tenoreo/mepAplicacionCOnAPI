import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import NavigatorInicio from './src/navigators/NavigatorInicio';

import AdministradorNavigator from './src/navigators/AdministradorNavigator';
//import HomeAdminitrador from './src/screens/Administrador/HomeAdminitrador';

//import HomeAdministrador from './src/screens/Administrador/HomeAdministrador';
export default function App() {
  return (
    < AdministradorNavigator/>
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
