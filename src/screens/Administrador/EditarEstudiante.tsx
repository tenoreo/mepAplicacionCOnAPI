import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Input, Button } from '../../components';
import { HAdminitrador } from "../../constants/type";

const EditarEstudiante=(props:HAdminitrador)=>{
  const [name, setName] = useState<string | null>(null);

    return (
        <View style={style.container}>

            <View style={style.containertitulo}>
                <Text style={style.titulo}>EDITAR ESTUDIANTE</Text>
            </View>

            <View style={style.containerButton}>

              <View>
                <Input placeholder="Identificación" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Nombre" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Apellido 1" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Apellido 2" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Correo" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Grado" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Contraseña" onChangeText={(text) => setName(text)} />
              </View>

            </View>

            <View style={style.containerAcept}>
              <Button
                title="Editar Estudiante"
                onPress={() => props.navigation.navigate('GestionEstudiante')}
              />
            </View>
        </View>
    ); 
}
export default EditarEstudiante;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
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
        flex: 1,
    },
    containerAcept: {
        alignContent: 'center',
        justifyContent: 'center',
    }
})