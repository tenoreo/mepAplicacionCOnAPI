import React, { Component, useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Input, Button } from '../../components';
import { HAdminitrador } from "../../Constants/type";



const data =     {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
  curso: 'Matematicas',
  horario: 'Viernes 9:00am a 12:00pm',
  idCurso: '1234',
  grado: '2'
};

const DATA = [
  {
    nombre: 'Rebe',
    cedula: '120456789'
  },
  {
    nombre: 'Tim',
    cedula: '122456789'
  },
  {
    nombre: 'Jose',
    cedula: '123458789'
  },
  {
    nombre: 'Josue',
    cedula: '123456789'
  },
  {
    nombre: 'Josue',
    cedula: '123456789'
  },
  {
    nombre: 'Josue',
    cedula: '123456789'
  },
  {
    nombre: 'Josue',
    cedula: '123456789'
  },
  {
    nombre: 'Josue',
    cedula: '123456789'
  },
];

const EstudianteCurso=(props:HAdminitrador)=>{
  const [name, setName] = useState<string | null>(null);

  const [visible, setVisible] = React.useState(false);
  const devolver=():void=>{
    props.navigation.goBack();
  }

  const Item = ({nombre, ident}) => (

    <TouchableOpacity onPress={() => { setVisible(true)}}>
  
      <View style={style.itemTexBox}>
        <Text>Nombre: {nombre}</Text>
        <Text>Identificación: {ident}</Text>
      </View>

     </TouchableOpacity>
  );

  const renderItem = ({ item }) => (

      <Item nombre={item.nombre}
          ident={item.cedula}
      />
  );
  return(
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text_header}>Asignar Estudiante a Cursos</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={style.footer}>
        <SafeAreaView>
            <Text style={style.text_header}>Curso</Text>
              <View style={style.containerInfoCuso}>
                <Text>Curso: {data.curso}</Text>
                <Text>Horario: {data.horario}</Text>
                <Text>ID: {data.idCurso}</Text>
                <Text>Grado: {data.grado}</Text>
              </View>
  
              <View>
                <Input placeholder='Identificación' onChangeText={(text) => setName(text)}/>
              </View>
  
              <View>
              <TouchableOpacity onPress={devolver} style={style.signIn}>
                <Text style={[style.textSign,{color:'#fff'}]}>Buscar Estudiante</Text>
              </TouchableOpacity>
              </View>
              <View>
              <Text style={style.text_header}>Estudiante No asignados</Text>
                <SafeAreaView style={style.conteinerAllStudent}>
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                  />
                </SafeAreaView>
                <Text style={style.text_header}>Estudiante asignados</Text>
                <SafeAreaView style={style.conteinerAllStudent}>
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                  />
                </SafeAreaView>
              </View>
        </SafeAreaView>
      </Animatable.View>
    </View>
  );
}
export default EstudianteCurso;


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
  tituloScreen: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  conteinerTituloScreen: {
    marginTop: 10,
  },
  containerInfoCuso: {
    backgroundColor: '#E3EDFE',
    opacity: 50,
    padding: 20,
    width: '95%',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1C7ED6'
  },
  conteinerAllStudent: {
    backgroundColor: '#E3EDFE',
    opacity: 50,
    padding: 20,
    width: '95%',
    height: 200,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1C7ED6'
  },
  itemTexBox: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding:10
  },
  conteinerScrolling: {
    width: '100%',
    paddingTop: StatusBar.currentHeight
  },
  scrollingList: {
    width: '100%'
  },
  signIn: {
      width: '95%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10, 
      backgroundColor: '#0948b3',
      margin:15
      
  },textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});