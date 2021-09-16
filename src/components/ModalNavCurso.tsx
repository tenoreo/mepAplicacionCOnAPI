import React from 'react';
import {createStackNavigator} from '@react-navigation/stack-navigator';
import {GestionCurso,EditarCurso} from '../../screens/Administrador'; 
import {ModalNavigatorCursoParamsList} from '../../constants';


const ModalStack=createStackNavigator<ModalNavigatorCursoParamsList>();

export default function ModalNavEstudiante(){
    const {Navigator,Screen}=ModalStack;
    return(
        <Navigator header="None">
            <Screen name="GestionCurso" component={GestionCurso} />
            <Screen 
                name="EditarCurso" 
                component={EditarCurso}
                option={{
                    cardOverlayEnabled: true,
                    cardStyle:{backgroundColor:'rgba(0,0,0,0.4)',
                    opacity: 1,
                }
                }}    
            />

        </Navigator>
        );
}

