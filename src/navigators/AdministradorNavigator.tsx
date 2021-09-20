import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Paginas
import HomeAdministrador from '../Screens/Administrador/HomeAdministrador';
import GestionCurso from '../Screens/Administrador/GestionCurso';
import GestionDocente from '../Screens/Administrador/GestionDocente';
import GestionEstudiante from '../Screens/Administrador/GestionEstudiante';
import CrearDocente from '../Screens/Administrador/CrearDocente';
import CrearEstudiante from '../Screens/Administrador/CrearEstudiante';
import CrearCurso from '../Screens/Administrador/CrearCurso';
import CursoProfesor from '../Screens/Administrador/CursoProfesor';
import EditarCurso from '../Screens/Administrador/EditarCurso';
import EditarDocente from '../Screens/Administrador/EditarDocente';
import EditarEstudiante from '../Screens/Administrador/EditarEstudiante';
import EstudianteCurso from '../Screens/Administrador/EstudianteCurso';
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