import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Paginas
import HomeAdministrador from '../screens/Administrador/HomeAdministrador';
import GestionCurso from '../screens/Administrador/GestionCurso';
import GestionDocente from '../screens/Administrador/GestionDocente';
import GestionEstudiante from '../screens/Administrador/GestionEstudiante'
import CrearDocente from '../screens/Administrador/CrearDocente';
import CrearEstudiante from '../screens/Administrador/CrearEstudiante';
import CrearCurso from '../screens/Administrador/CrearCurso';
import CursoProfesor from '../screens/Administrador/CursoProfesor';
import EditarCurso from '../screens/Administrador/EditarCurso';
import EditarDocente from '../screens/Administrador/EditarDocente';
import EditarEstudiante from '../screens/Administrador/EditarEstudiante';
import EstudianteCurso from '../screens/Administrador/EstudianteCurso';
const Stack=createNativeStackNavigator();

export default function AdministradorNavigator(){
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="HomeAdministrador">
                <Stack.Screen name="HomeAdministrador" component={HomeAdministrador}/>   
                 <Stack.Screen name="CrearDocente" component={CrearDocente}/>
                 <Stack.Screen name="CrearEstudiante" component={CrearEstudiante}/> 
                 <Stack.Screen name="CrearCurso" component={CrearCurso}/>  
                 <Stack.Screen name="CursoProfesor" component={CursoProfesor}/> 
                 <Stack.Screen name="EditarCurso" component={EditarCurso}/> 
                 <Stack.Screen name="EditarDocente" component={EditarDocente}/> 
                 <Stack.Screen name="EditarEstudiante" component={EditarEstudiante}/> 
                 <Stack.Screen name="EstudianteCurso" component={EstudianteCurso}/> 
                <Stack.Screen name="GestionCurso" component={GestionCurso}/> 
                <Stack.Screen name="GestionDocente" component={GestionDocente}/>
                <Stack.Screen name="GestionEstudiante" component={GestionEstudiante}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}