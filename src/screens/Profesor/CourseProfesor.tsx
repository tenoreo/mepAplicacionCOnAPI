import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function CourseProfesor (){
    return(
        <View style={styles.container}>
            <Text>Course Profesor Screen</Text>
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