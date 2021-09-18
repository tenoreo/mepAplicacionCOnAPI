import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar,
    Animated, TouchableOpacity, Modal, Image } from "react-native";

import { FontAwesome,FontAwesome5,Entypo } from '@expo/vector-icons';
import { HAdminitrador } from "../../constants/type";

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
  return (
    <View style={style.container}>
      <View>
          <Text style={style.titulo}>INFORMACIÓN DOCENTE</Text>
      </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 25,
    color : 'black',
    fontWeight: 'bold',
    marginTop: 20
  },
  containerInfoDocente: {
    borderColor: '#1C7ED6',
    backgroundColor: '#E3EDFE',
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    marginTop: 20,
    width: '90%',
    height: '70%',
  },
  infoDocente: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderBottomWidth: 2,
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
  }
});