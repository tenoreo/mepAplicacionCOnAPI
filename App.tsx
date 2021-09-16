import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from './src/navigators/bottomNavigator';
import Login from './src/screens/login';
import CrearDocente from './src/screens/Administrador/crearDocente';
import CursoProfesor from './src/screens/Administrador/cursoProfesor';
import EditarDocente from './src/screens/administrador/editarDocente';
import GestionDocente from './src/screens/administrador/gestionDocente';
export default function App() {
  return (
    < GestionDocente/>
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
