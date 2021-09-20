import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Paginas
import Login from '../Screens/Login';
import NavigatorProfesor from './bottomNavigatorProfesor';
import NavigatorStudent from './bottomNavigatorStudent';
import HomeAdminitrador from '../Screens/Administrador/HomeAdministrador';

const Stack=createNativeStackNavigator();

export default function NavigatorInicio(){
    
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="NavigatorProfesor" component={NavigatorProfesor}/>
                <Stack.Screen name="NavigatorStudent" component={NavigatorStudent}/>
                <Stack.Screen name="HomeAdminitrador" component={HomeAdminitrador}/>
            </Stack.Navigator>
            
        </NavigationContainer>
        )
}