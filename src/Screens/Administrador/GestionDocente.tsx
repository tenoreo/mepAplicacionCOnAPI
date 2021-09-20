import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useEffect,useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity, Modal, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';

import { Administrador } from "../../Constants";
import {HAdminitrador} from '../../Constants/type';
import firebase from "firebase";
import { doc, QuerySnapshot } from "@firebase/firestore";

const GestionDocente=(props:HAdminitrador)=>{
  const [visible, setVisible] = useState(false);
  const [docente,setDocente]=useState<any>([{Nombre:'',Apellido1:'',Apellido2:'',Correo:'',Calificacion:0}]);

  const AgregarNuevoDocente=():void=>{
    props.navigation.navigate(Administrador.CrearDocente);
  }
  const obtenerDocente=async()=>{
    await firebase.firestore().collection('Usuario').where('TipoUsuario','==','Docente').get().then(
      snapshot=>{
        const temp:any[]=[];
        snapshot.forEach(doc=>{
          temp.push({id:doc.id,...doc.data()});
        })
        setDocente(temp);
      }
    )    
  }
  useEffect(()=>{
    obtenerDocente();
  },[]);
  

    const Item = ({nombre, email,calificacion}) => (
      console.log(nombre),
    <TouchableOpacity onPress={() => { setVisible(true)}} style={style.item}>
        
      <View style={style.itemText}>
        <Text style={style.title}>Nombre: {nombre}</Text>
        <Text style={style.title}>Calificacion: {calificacion}</Text>
        <Text style={style.title}>E-mail: {email}</Text>
      </View>

    </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
      console.log(item),
        <Item
            nombre={item.Nombre+' '+item.Apellido1+' '+item.Apellido2}
            email={item.Correo}
            calificacion={item.Calificacion}
        />
    );
    return(
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.text_header}>Docentes</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={style.footer}>
          <View style={style.containerButton}>
              <SafeAreaView style={style.containerList}>
                  <FlatList
                      data={docente}
                      renderItem={renderItem}
                  />
              </SafeAreaView>
          </View>
          <View style={style.btnImegContainerPlus}>
            <TouchableOpacity onPress={AgregarNuevoDocente}>
              <FontAwesome5
                name="plus"
                size={20}
                color='white'
              ></FontAwesome5>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
}
export default GestionDocente;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0948b3'
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
    item: {
        backgroundColor: '#E3EDFE',
        opacity: 50,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1C7ED6'
    },
    itemText: {
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
    containerList: {
        flex: 1,
        width: '98%',
        marginTop: StatusBar.currentHeight || 0,
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        justifyContent: 'space-evenly',
        flex: 1,
        width: '100%'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    btnEdit: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.1
    },
    btnImeg: {
      height: 40,
      width: 40,
    },
    btnImegContainer: {
      position: 'relative',
      marginLeft: 10,
      marginTop: 5,
      left: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#748FFC',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 9},
      shadowOpacity: 0.1,
      elevation: 7,
      height: 60,
      width: 60,
    },
    btnImegContainerPeligro: {
      position: 'relative',
      marginLeft: 10,
      marginTop: 5,
      left: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D8383D',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 9},
      shadowOpacity: 0.1,
      elevation: 7,
      height: 60,
      width: 60,
    },
    btnImegContainerPlus: {
      position: 'absolute',
      marginLeft: 10,
      marginTop: 5,
      bottom: 10,
      right:10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#748FFC',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 9},
      shadowOpacity: 0.1,
      elevation: 7,
      height: 60,
      width: 60,
    },
    btnsImegContainer: {
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      flexDirection: 'row',
      width: '100%',
    }
})