import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from '../../components';

const App : FC = (props) => {
    return (
        <View style={style.container}>
            <View style={style.containertitulo}>
                <Text style={style.titulo}>ADMINISTRADOR</Text>
            </View>
            <View style={style.containerButton}>
                <Button
                    title="Gestión de Cursos"
                    onPress={() => props.navigation.navigate('login')}
                />
                <Button
                    title="Gestión de Docentes"
                    onPress={() => props.navigation.navigate('login')}
                />
                <Button
                    title="Gestión de Estudiantes"
                    onPress={() => props.navigation.navigate('login')}
                />
            </View>
        </View>
    ) 
}

export default App;

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