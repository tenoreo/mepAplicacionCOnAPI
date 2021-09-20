import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image,Dimensions} from "react-native";
import { Administrador } from "../../Constants";
import {HAdminitrador} from '../../Constants/type';
import * as Animatable from 'react-native-animatable';
const HomeAdministrador=(props:HAdminitrador) => {
    const NavigateCurso=()=>{
        props.navigation.navigate(Administrador.Curso);
    }

    const NavigateDocente=()=>{
        props.navigation.navigate(Administrador.Docente);
    }
    const NavigateEstudiante=()=>{
        props.navigation.navigate(Administrador.Estudiante);
    }
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.text_header}>Gestión</Text>
                 <Image 
                source={require('../../../assets/logo.png')}
                style={style.image}/> 
            </View>
            <Animatable.View
            animation="fadeInUpBig"
             style={style.footer}>
                <TouchableOpacity onPress={NavigateCurso} style={[style.button,{marginTop:20}]}>
                        <Text style={[style.textSign,{color:'#fff'}]}>Cursos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={NavigateDocente} style={[style.button,{marginTop:25}]}>
                        <Text style={[style.textSign,{color:'#fff'}]}>Docentes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={NavigateEstudiante} style={[style.button,{marginTop:25}]}>
                        <Text style={[style.textSign,{color:'#fff'}]}>Estudiantes</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

export default HomeAdministrador;

const {height}=Dimensions.get('screen');
const height_logo=height*0.18;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0948b3',
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    button:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        backgroundColor: '#0948b3',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image:{
        alignItems: 'flex-end',
        width: height_logo,
        height: height_logo,
        borderRadius: 1000
    }
});