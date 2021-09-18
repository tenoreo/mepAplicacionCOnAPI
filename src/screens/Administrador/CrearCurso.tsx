import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { HAdminitrador } from "../../constants/type";
import { Input, Button } from '../components';


const CrearCurso = (props:HAdminitrador) => {
  const [name, setName] = useState<string | null>(null);

    return (
        <View style={style.container}>

            <View style={style.containertitulo}>
                <Text style={style.titulo}>AGREGAR CURSO</Text>
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
                title="Crear Curso"
                onPress={() => console.log('XD')}
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
    containerAcept: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})