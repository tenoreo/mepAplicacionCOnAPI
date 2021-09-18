import React, { Component, useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Input, Button } from '../../components';
import { HAdminitrador } from "../../constants/type";



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
    return (
      <View style={style.container}>
        <SafeAreaView style={style.container}>
          <ScrollView>
            <View style={style.conteinerTituloScreen}>
              <Text style={style.tituloScreen}>        Asignar estudiantes</Text>
            </View>

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
              <Button
                title="Buscar estudiante"
                onPress={devolver}
              />
            </View>
            <View>
              <SafeAreaView style={style.conteinerAllStudent}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                />
              </SafeAreaView>
                
              <SafeAreaView style={style.conteinerAllStudent}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                />
              </SafeAreaView>
            </View>
        </ScrollView>

        </SafeAreaView>

      </View>

    );
}
export default EstudianteCurso;


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
    width: '90%',
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
    width: '90%',
    height: 200,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1C7ED6'
  },
  itemTexBox: {
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  conteinerScrolling: {
    width: '100%',
    paddingTop: StatusBar.currentHeight
  },
  scrollingList: {
    width: '100%'
  }
});