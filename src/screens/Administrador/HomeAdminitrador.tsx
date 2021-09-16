import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from '../../components';

const HomeAdminitrador : FC = (props) => {
    return (
        <View style={style.container}>
            <View style={style.containertitulo}>
                <Text style={style.titulo}>ADMINISTRADOR</Text>
            </View>
            <View style={style.containerButton}>
                <Button
                    title="Gestión de Cursos"
                    onPress={() => props.navigation.navigate('login')}{/*Gestion de curso */}
                />
                <Button
                    title="Gestión de Docentes"
                    onPress={() => props.navigation.navigate('login')}{/*Gestion de Docente */}
                />
                <Button
                    title="Gestión de Estudiantes"
                    onPress={() => props.navigation.navigate('login')}{/*Gestion de estudiante */}
                />
            </View>
        </View>
    ) 
}

export default HomeAdminitrador;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containertitulo: {
        height: '15%',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 25,
        color : 'black',
        fontWeight: 'bold',
    },
    containerButton: {
        justifyContent: 'space-evenly',
        flex: 1
    },
})

// onPress={() => props.navigation.navigate('login')}