import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';

export default function HomeProfesor (){
    const [tareas,setTareas]=useState<any>([{Nombre:'',Titulo:'',TipoNoticia:'',fechaEntrega:'',Descripcion:''}]);
    const obtenerNoticias=async()=>{
        const _cursos=await firebase.firestore().collection('Tarea').get();
        const temp:any[]=[];
        _cursos.forEach(item=>{
        temp.push({id:item.id,...item.data()});
    });
    setTareas(temp);
    
    }
    useEffect(()=>{
        obtenerNoticias();
    })
    const renderItem=({item})=>{
        return(
            <TouchableOpacity  style={styles.signIn}>
                <Text style={[styles.textSign,{color:'#fff'}]}>{'Materia: '+item.Nombre+ '\n'+
                'Titulo: '+item.Titulo +'\n'+
                'Descripcion: '+item.Descripcion+'\n'+
                'Tipo de noticia: '+item.tipoNoticia+'\n'+
                'Fecha de Entrega: '+item.fechaEntrega}</Text>
            </TouchableOpacity>
        );   
    }
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Tareas</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View style={styles.containerButton}>
                <SafeAreaView style={styles.containerButton}>
                    <FlatList
                        data={tareas}
                        renderItem={renderItem}
                    />
                </SafeAreaView>
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
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        backgroundColor: '#0948b3',
        marginBottom:25
        
    },textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})