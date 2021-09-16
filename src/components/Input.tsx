import React,{FC} from 'react';
import { View, Dimensions, StyleSheet,TextInput } from 'react-native';

//para obtener las dimensiones del dispositivo
const {height,width}= Dimensions.get('screen');

//es para el manejo de los datos que se van a utilizar
interface Props{
    placeholder:string;
    onChangeText:(text:string)=>void;
    secureTextEntry?:boolean;
}

const Input:FC<Props> =(props)=>{
    return (
        <View>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText}/>
        </View>
    )
}
export default Input;

const styles= StyleSheet.create({
    container:{
        width: width /1.1,
        alignSelf:'center',
        backgroundColor:'#e3e3e3',
        borderRadius: 5,
        marginVertical:10,
    },
    input:{
        padding:15
    }
})