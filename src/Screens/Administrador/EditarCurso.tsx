import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Input, Button } from '../../components';
import { HAdminitrador } from "../../Constants/type";


const EditarCurso=(props:HAdminitrador)=>{
    const [name, setName] = useState<string | null>(null);
    const devolver=():void=>{
        props.navigation.goBack();
      }
      return(
        <View style={style.container}>
          <View style={style.header}>
            <Text style={style.text_header}>Editar Curso</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={style.footer}>
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
                <TouchableOpacity onPress={devolver} style={style.signIn}>
                    <Text style={[style.textSign,{color:'#fff'}]}>Aceptar Cambios</Text>
                </TouchableOpacity>
                </View>
          </Animatable.View>
        </View>
      );
}

export default EditarCurso;

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
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        backgroundColor: '#0948b3',
        
    },textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})