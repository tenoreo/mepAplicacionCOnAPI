import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function ProfileProfesor (){
    return(
        <View style={styles.container}>
            <Text>Profile Profesor Screen</Text>
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