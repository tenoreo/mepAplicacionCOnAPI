import React from 'react';
import {createStackNavigator} from '@react-navigation/stack-navigator';
import {GestionDocente,EditarDocente} from '../../screens/Administrador'; 
import {ModalNavigatorDocenteParamsList} from '../../constants';


const ModalStack=createStackNavigator<ModalNavigatorDocenteParamsList>();

export default function ModalNavEstudiante(){
    const {Navigator,Screen}=ModalStack;
    return(
        <Navigator header="None">
            <Screen name="GestionDocente" component={GestionDocente} />
            <Screen 
                name="EditarDocente" 
                component={EditarDocente}
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

