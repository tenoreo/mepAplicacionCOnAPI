import React, { FC, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Input, Button } from '../../components';
import { HAdminitrador } from "../../Constants/type";
import firebase from 'firebase';

const CrearEstudiante = (props:HAdminitrador) => {
  const [name, setName] = useState<string>('');
  const [apellido1, setApellido1] = useState<string>('');
  const [apellido2, setApellido2] = useState<string>('');
  const [identificacion,setIdentificacion]=useState<string>('');
  const [grado,setGrado]=useState<string>('');
  const [correo,setCorreo]=useState<string>('');
  const devolver=async()=>{
    const dato={
      Nombre:name,
      Apellido1:apellido1,
      Apellido2:apellido2,
      Cedula:identificacion,
      Correo:correo,
      Grado:grado,
      TipoUsuario:'Estudiante'
    }
    if(name.length!=0 && apellido1.length!=0 && apellido2.length!=0 && identificacion.length!=0 && correo.length!=0 && grado.length!=0){
      await firebase.firestore().collection('Usuario').add(dato);
      props.navigation.goBack();
    }else{
      Alert.alert('Error','Falta campos por llenar');
    }
  }
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>Agregar Estudiante</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
      <View style={style.containerButton}>
        <View>
          <Input placeholder="Identificación" onChangeText={(text) => setIdentificacion(text)} />
        </View>
        <View>
          <Input placeholder="Nombre" onChangeText={(text) => setName(text)} />
        </View>
        <View>
          <Input placeholder="Primer Apellido" onChangeText={(text) => setApellido1(text)} />
        </View>
        <View>
          <Input placeholder="Segundo Apellido" onChangeText={(text) => setApellido2(text)} />
        </View>
        <View>
          <Input placeholder="Correo" onChangeText={(text) => setCorreo(text)} />
        </View>
        <View>
          <Input placeholder="Grado" onChangeText={(text) => setGrado(text)} />
        </View>  
        </View>
  
        <View style={style.containerAcept}>
          <TouchableOpacity onPress={devolver} style={style.signIn}>
            <Text style={[style.textSign,{color:'#fff'}]}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default CrearEstudiante;

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