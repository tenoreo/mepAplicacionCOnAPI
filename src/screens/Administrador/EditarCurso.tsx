import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Input, Button } from '../../components';

const EditarCurso : FC = (props) => {
  const [name, setName] = useState<string | null>(null);

    return (
        <View style={style.container}>

            <View style={style.containertitulo}>
                <Text style={style.titulo}>EDITAR CURSO</Text>
            </View>

            <View style={style.containerButton}>

              <View>
                  <Input placeholder="Curso" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                  <Input placeholder="Horario" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                  <Input placeholder="Grado" onChangeText={(text) => setName(text)} />
              </View>

            </View>

            <View style={style.containerAcept}>
              <Button
                title="Aceptar Cambio"
                onPress={() => console.log('XD')}
              />
            </View>
        </View>
    ) 
}

export default EditarCurso;

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
    containerAcept: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1
        // height: 20,
        // padding: 5,
    }
})


// onPress={() => props.navigation.navigate('login')}