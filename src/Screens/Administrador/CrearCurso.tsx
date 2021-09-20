import React, {useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import { HAdminitrador } from "../../Constants/type";
import { Input, Button } from '../../components';
import firebase from 'firebase';

const CrearCurso = (props:HAdminitrador) => {
  const [name, setName] = useState<string>('');
  const [horario,setHorario]=useState<string>('');
  const [grado,setGrado] =useState<string>('');
  const [numeroCurso,setNumeroCurso]=useState<string>('');
  const devolver=async()=>{
      const dato={
        Nombre:name,
        Horario:horario,
        Grado:grado,
        NumeroCurso:numeroCurso,
      }
      if(name.length!=0 && horario.length!=0 && grado.length!=0){
        await firebase.firestore().collection('Cursos').add(dato);
        props.navigation.goBack();
      }else{
        Alert.alert('Error','Falta campos por llenar');
      }
  }
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>Agregar Curso</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
      <View style={style.containerButton}>
        <View>
            <Input placeholder="Nombre Curso ej. Ciencias" onChangeText={(text) => setName(text)} />
        </View>
        <View>
            <Input placeholder="Horario ej. Martes 7:00am a 9:00am" onChangeText={(text) => setHorario(text)} />
        </View>
        <View>
            <Input placeholder="Grado ej. 10" onChangeText={(text) => setGrado(text)} />
        </View>
        <View>
            <Input placeholder="Numero de Curso ej. 10" onChangeText={(text) => setNumeroCurso(text)} />
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

export default CrearCurso;

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
        flex: 1,
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