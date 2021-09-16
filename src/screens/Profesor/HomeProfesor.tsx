import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function HomeProfesor (){
    return(
        <View style={styles.container}>
            <Text>Home Profesor Screen</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});