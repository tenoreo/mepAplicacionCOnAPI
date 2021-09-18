import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from '../../components';
import { Administrador } from "../../constants";
import {HAdminitrador} from '../../constants/type';

const HomeAdministrador=(props:HAdminitrador)=> {
    
    const NavigateCurso=()=>{
        props.navigation.navigate(Administrador.Curso);
    }

    const NavigateDocente=()=>{
        props.navigation.navigate(Administrador.Docente);
    }
    const NavigateEstudiante=()=>{
        props.navigation.navigate(Administrador.Estudiante);
    }
    
    return (
        <View style={style.container}>
            <View style={style.containertitulo}>
                <Text style={style.titulo}>ADMINISTRADOR</Text>
            </View>
            <View style={style.containerButton}>
                <Button
                    title="Gestión de Cursos"
                    onPress={NavigateCurso}
                />
                <Button
                    title="Gestión de Docentes"
                    onPress={NavigateDocente}
                />
                <Button
                    title="Gestión de Estudiantes"
                    onPress={NavigateEstudiante}
                />
            </View>
        </View>
    ); 
}
export default HomeAdministrador;

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
});