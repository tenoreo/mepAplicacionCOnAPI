import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar,
    Animated, TouchableOpacity, Modal, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import { FontAwesome,FontAwesome5,Entypo } from '@expo/vector-icons';
import { HAdminitrador } from "../../Constants/type";

const InfoDocente=(props:HAdminitrador)=>{
  const Item = ({curso, grado, id}) => (
  
    <TouchableOpacity onPress={() => { console.log(curso)} }>
  
      <View style={style.itemText}>
        <Text>Curso:  {curso}</Text>
        <Text>Grado:  {grado}</Text>
        <Text>ID:         {id}</Text>
      </View>
  
    </TouchableOpacity>
  );
  
  const renderItem = ({ item }) => (
    console.log(item),
      <Item
          curso={item.curso}
          grado={item.grado}
          id={item.id}
      />
  );
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>Informacion Docente</Text>
      </View>
      <Animatable.View style={style.footer} animation="fadeInUpBig">
      <View style={style.containerInfoDocente}>
        <View style={style.infoDocente}>
          <Text>Nombre: Josué Torres Narvaez</Text>
          <Text>Cédula:   123456789</Text>
          <Text>E-mail:     josuetorres@mep.com</Text>
          <Text>Calificación: 8 de 10</Text>
        </View>

        <SafeAreaView style={style.containerList}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>

      <View style={style.containerbtnFloats}>

        <TouchableOpacity style={style.btnContainerEli}>
          <FontAwesome
            name="trash"
            size={20}
            color='white'
          ></FontAwesome>
          
        </TouchableOpacity>

        <TouchableOpacity style={style.btnContainer}>
          <Entypo
            name="edit"
            size={20}
            color='white'
          ></Entypo>
          
        </TouchableOpacity>

        <TouchableOpacity style={style.btnContainer}>
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
export default InfoDocente;



const DATA = [
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
  {
    curso: 'Matemáticas',
    grado: '4',
    id: 'abc123'
  },
];

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
  footer:{
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 55
  },
  titulo: {
    fontSize: 25,
    color : 'black',
    fontWeight: 'bold',
    marginTop: 20
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
  containerInfoDocente: {
    borderColor: '#1C7ED6',
    backgroundColor: '#E3EDFE',
    borderRadius: 20,
    borderWidth: 1,
    width: '100%',
    height: '70%',
    padding:10
  },
  infoDocente: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderBottomWidth: 2,
    marginLeft: 10,
  },
  containerbtnFloats: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    width: '100%',
    height: '10%',
  },
  btnContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#748FFC',
    marginRight: 10,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 9},
    shadowOpacity: 0.1,
    elevation: 7,
  },
  btnContainerEli: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8383D',
    marginRight: 10,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 9},
    shadowOpacity: 0.1,
    elevation: 7,
  },
  btnPlus: {
    height: 40,
    width: 40,
  },
  containerList: {
    backgroundColor: 'white',
    height: '76%',
    borderBottomEndRadius: 30,
    borderBottomStartRadius:30,
    padding: 5,
  },
  itemText: {
    borderBottomWidth: 1,
    marginLeft: 20,
    padding:10
  }
});