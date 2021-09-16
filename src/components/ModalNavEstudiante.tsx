import React from 'react';
import {createStackNavigator} from '@react-navigation/stack-navigator';
import {GestionEstudiante,EditarEstudiante} from '../../screens/Administrador'; 
import {ModalNavigatorEstudianteParamsList} from '../../constants';


const ModalStack=createStackNavigator<ModalNavigatorEstudianteParamsList>();

export default function ModalNavEstudiante(){
    const {Navigator,Screen}=ModalStack;
    return(
        <Navigator header="None">
            <Screen name="GestionEstudiante" component={GestionEstudiante} />
            <Screen 
                name="EditarEstudiante" 
                component={EditarEstudiante}
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

