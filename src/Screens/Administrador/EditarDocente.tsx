import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Input, Button } from '../../components';
import { HAdminitrador } from "../../Constants/type";


const EditarDocente=(props:HAdminitrador)=>{
  const [name, setName] = useState<string | null>(null);
  const devolver=():void=>{
    props.navigation.goBack();
  }
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>Editar Docente</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
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
        <View style={style.containerAcept}>
        <TouchableOpacity onPress={devolver} style={style.signIn}>
          <Text style={[style.textSign,{color:'#fff'}]}>Aceptar Cambios</Text>
        </TouchableOpacity>
      </View>
      </Animatable.View>
    </View>
  );
}

export default EditarDocente;

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
        flex: 1,
    },
    containerAcept: {
        alignContent: 'center',
        justifyContent: 'center',
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