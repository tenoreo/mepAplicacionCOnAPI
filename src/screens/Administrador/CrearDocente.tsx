import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from '../../components';


const App : FC = (props) => {
  const [name, setName] = useState<string | null>(null);

    return (
        <View style={style.container}>

            <View style={style.containertitulo}>
                <Text style={style.titulo}>AGREGAR DOCENTE</Text>
            </View>

            <View style={style.containerButton}>

              <View>
                <Input placeholder="Identifión" onChangeText={(text) => setName(text)} />
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
                <Input placeholder="Número de Télefono" onChangeText={(text) => setName(text)} />
              </View>
              <View>
                <Input placeholder="Contraseña" onChangeText={(text) => setName(text)} />
              </View>

            </View>

            <View style={style.containerAcept}>
              <Button
                title="Crear Docente"
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
