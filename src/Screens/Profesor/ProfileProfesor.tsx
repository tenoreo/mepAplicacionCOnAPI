import React from 'react';
import {StyleSheet,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons,FontAwesome} from '@expo/vector-icons';
import { Rating} from 'react-native-elements';
export default function ProfileProfesor (){
    return(
        <View style={style.container}>
          <View style={style.header}>
          <Text style={style.text_header}>Perfil</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={style.footer}>
              <View style={style.icon}>
              <Ionicons 
                name="ios-person" 
                size={50} 
                color="white" 
                />
              </View>
            <Text style={style.name}>Kendall Tenorio Chévez</Text>
            <Text style={{color:'grey',marginBottom:20}}>Profesor</Text>
            <Rating showRating fractions="{1}" startingValue="{3.3}" />
            <View style={{flexDirection:'row',justifyContent: 'space-between',width:'75%'}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Cursos</Text>
                <Text style={{color:'#6d617f'}}>Ver todos</Text>
            </View>
            <ScrollView style={{flexDirection:'row',height:'200',width:'100%',paddingLeft:50.0,paddingTop:12.0}}>
                <TouchableOpacity style={{backgroundColor:'red',borderRadius:15,width:'150',height:'200',marginLeft:8,padding:20}}>
                    <Text style={{color:'#fff'}}>Matematicas</Text>
                    <Text style={{color:'#fff'}}>Grupo 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'red',borderRadius:15,width:'150',height:'200',marginLeft:8,padding:20}}>
                    <Text style={{color:'#fff'}}>Matematicas</Text>
                    <Text style={{color:'#fff'}}>Grupo 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'red',borderRadius:15,width:'150',height:'200',marginLeft:8,padding:20}}>
                    <Text style={{color:'#fff'}}>Matematicas</Text>
                    <Text style={{color:'#fff'}}>Grupo 2</Text>
                </TouchableOpacity>
                
            </ScrollView>
            
          </Animatable.View>
        </View>
      );
}

const style=StyleSheet.create({
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
        alignItems: 'center',
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
    icon:{
        backgroundColor: '#eee',
        borderRadius:25,
        height:100,
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 9},
        shadowOpacity: 0.1,
        elevation: 7,
        marginBottom:25

    },
    name:{
        fontSize:36,
        fontWeight: 'bold',
        justifyContent:"center",
        alignItems: 'center',
        marginBottom:20
    }
    
});