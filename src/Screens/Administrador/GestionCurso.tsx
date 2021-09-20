import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar,
    Animated, TouchableOpacity, Modal, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Administrador } from "../../Constants";
import {HAdminitrador} from '../../Constants/type';
import { FontAwesome5,Entypo,Foundation,FontAwesome} from '@expo/vector-icons';
import firebase from 'firebase';

const GestionCurso =(props:HAdminitrador)=>{

  const [visible, setVisible] = useState(false);
  const [cursos,setCursos]=useState<any>([{Nombre:'',Grado:'',Horario:'',NumeroCurso:''}]);

  const agregarCurso=():void=>{
    props.navigation.navigate(Administrador.CrearCurso);
  }
   const obtenerCursos=async() => {
    const _cursos=await firebase.firestore().collection('Cursos').get();
    const temp:any[]=[];
    _cursos.forEach(item=>{
      temp.push({id:item.id,...item.data()});
    });
    setCursos(temp);
    console.log(temp);
   }

    useEffect(()=>{
      obtenerCursos();
    },[]);

  const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    
    React.useEffect(() => {
      toggleModal();
    }, [visible]);

    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
        //   duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={style.modalBackGround}>
          <Animated.View
            style={[style.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

    const Item = ({ curso, horario, idCurso, grado}) => (

      <TouchableOpacity onPress={() => { setVisible(true)}} style={style.item}>
    
            <ModalPoup visible={visible}>
                <View style={{alignItems: 'center'}}>
                <View style={style.header}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                    <Foundation name="x" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={style.title}>Información</Text>
                    <Text></Text>
                </View>
        
                <Text style={style.title}>Curso: {curso}</Text>
                <Text style={style.title}>Horario: {horario}</Text>
                <Text style={style.title}>ID: {idCurso}     Grado: {grado}</Text>

                <View style={style.btnsImegContainer}>
                  <View style={style.btnImegContainerPeligro}>
                      <TouchableOpacity>
                      <FontAwesome
                        name="trash"
                        size={20}
                        color='white'
                      ></FontAwesome>
                      </TouchableOpacity>
                  </View>

                  <View style={style.btnImegContainer}>
                      <TouchableOpacity>
                      <FontAwesome name="group" size={20} color="white" />
                      </TouchableOpacity>
                    </View>

                    <View style={style.btnImegContainer}>
                      <TouchableOpacity>
                      <Entypo
                        name="edit"
                        size={20}
                        color='white'
                      ></Entypo>
                      </TouchableOpacity>
                    </View>
                </View>
            </ModalPoup>
        
            <View style={style.itemText}>
            <Text style={style.title}>Curso: {curso}</Text>
            <Text style={style.title}>Horario: {horario}</Text>
            <Text style={style.title}>ID: {idCurso}     Grado: {grado}</Text>
            </View>

            </TouchableOpacity>
    );
    const renderItem = ({ item }) => (

      <Item 
          curso={item.Nombre}
          horario={item.Horario}
          idCurso={item.NumeroCurso}
          grado={item.Grado}
      />
  );
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>Información Estudiante</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
          <View style={style.containerButton}>
  
              <SafeAreaView style={style.containerList}>
                  <FlatList
                      data={cursos}
                      renderItem={renderItem}
                  />
              </SafeAreaView>
          </View><View style={style.btnImegContainerPlus}>
            <TouchableOpacity onPress={agregarCurso}>
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
export default GestionCurso;

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
    item: {
        backgroundColor: '#E3EDFE',
        opacity: 50,
        padding: 20,
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
        marginTop: StatusBar.currentHeight || 0,
    },  modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        justifyContent: 'space-evenly',
        flex: 1
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

});