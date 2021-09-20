import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';

export default function CourseProfesor (){
    const [cursos,setCurso]=useState<any>([{Nombre:'',Grado:'',Horario:''}]);
    const obtenerCursos=async()=>{
        const _cursos=await firebase.firestore().collection('Cursos').get();
        const temp:any[]=[];
        _cursos.forEach(item=>{
        temp.push({id:item.id,...item.data()});
    });
    setCurso(temp);
    
    }
    
    const renderItem=({item})=>{
        return(
            <TouchableOpacity  style={styles.signIn}>
                <Text style={[styles.textSign,{color:'#fff'}]}>{item.Nombre+'   Grado:'+item.Grado}</Text>
            </TouchableOpacity>
        );   
    }

    useEffect(()=>{
        obtenerCursos();
    })
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Cursos</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View style={styles.containerButton}>
                <SafeAreaView style={styles.containerButton}>
                    <FlatList
                        data={cursos}
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
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        backgroundColor: '#0948b3',
        marginBottom:15
        
    },textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerButton: {
        justifyContent: 'space-evenly',
        flex: 1,
        width: '100%'
    }
});