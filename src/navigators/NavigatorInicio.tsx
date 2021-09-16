import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login';
import NavigatorProfesor from './bottomNavigator';
import NavigatorStudent from './bottomNavigatorStudent';
import HomeAdminitrador from '../screens/Administrador/HomeAdminitrador';

const MainStack=createStackNavigator();

const NavigatorInicio:React.FC=()=>{
    const {Navigator,Screen}=MainStack;
    return (
        <Navigator >
            <Screen name="Login" component={Login}/>
            <Screen name="NavigatorProfesor" component={NavigatorProfesor}/>
            <Screen name="NavigatorStudent" component={NavigatorStudent}/>
            <Screen name="HomeAdminitrador" component={HomeAdminitrador}/>
        </Navigator>
        )
}