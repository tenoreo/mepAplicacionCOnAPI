import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Dimensions,ScrollView} from 'react-native';

const OPTIONS=['red','blue','yellow','orange', 'white'];
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;

export default function Picker (props:any){
    const onPressItemOption=(option:any)=>{
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option=OPTIONS.map((item,index)=>{
        return(
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={()=>onPressItemOption(item)}
            >
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        )
    });

    return(
        <View>
            <TouchableOpacity
                onPress={()=>props.changeModalVisbility(false)}
                style={[styles.container,{width:WIDTH-20,height:HEIGHT/2}]}
            >
                <ScrollView>
                    {option}
                </ScrollView>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal:{
        backgroundColor: 'white',
        borderRadius: 10
    },text: {
        margin:20,
        fontWeight: 'bold',
        fontSize:20,
    },
    option:{
        alignItems:'flex-start'
    },
    
});