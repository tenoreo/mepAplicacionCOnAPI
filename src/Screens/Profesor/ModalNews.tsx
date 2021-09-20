import React,{useState} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Alert} from 'react-native';
import { Input, Button } from '../../components';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';


export default  function ModalNews(){
    const [nombre,setNombre]=useState<string>('');
    const [titulo,setTitulo]=useState<string>('');
    const [descripcion,setDescripcion]=useState<string>('');
    const [fechaEntrega,setFechaEntrega]=useState<string>('');
    const [tipoNoticia,setTipoNoticia]=useState<string>('');

    const agregarNoticia=async()=>{
        const dato={
          Nombre:nombre,
          Titulo:titulo,
          Descripcion:descripcion,
          FechaEntrega:fechaEntrega,
          TipoNoticia:tipoNoticia
        }
        if(nombre.length!=0 && titulo.length!=0 && descripcion.length!=0 && fechaEntrega.length!=0 && tipoNoticia.length!=0){
          await firebase.firestore().collection('Tarea').add(dato);
          
        }else{
          Alert.alert('Error','Falta campos por llenar');
        }
    } 

    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Nueva Noticia</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.containerButton}>
                <View>
                    <Input placeholder="Nombre Curso ej. Ciencias" onChangeText={(text) => setNombre(text)} />
                </View>
                <View>
                    <Input placeholder="Titulo de la noticia" onChangeText={(text) => setTitulo(text)} />
                </View>
                <View>
                    <Input placeholder="Descripcion de la noticia" onChangeText={(text) => setDescripcion(text)} />
                </View>
                <View>
                    <Input placeholder="Fecha de entrega ej.7/9/2020" onChangeText={(text) => setFechaEntrega(text)} />
                </View>
                <View>
                    <Input placeholder="Tipo de noticia ej.Tarea o Noticia" onChangeText={(text) => setTipoNoticia(text)} />
                </View>
            </View>
    
            <View style={styles.containerAcept}>
                <TouchableOpacity onPress={agregarNoticia}style={styles.signIn}>
                    <Text style={[styles.textSign,{color:'#fff'}]}>Agregar</Text>
                </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      );
}

const styles=StyleSheet.create({
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
    containerAcept: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    containerButton: {
        justifyContent: 'space-evenly',
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
});