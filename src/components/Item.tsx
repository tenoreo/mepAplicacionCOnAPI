import React,{Component,useState} from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';


const [visible, setVisible] = useState(false);
export default class Item extends Component {
    construtor(props:any){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity onPress={() => { setVisible(true)}}>
                <View style={styles.itemTexBox}>
                <Text>Curso: {this.nombre}</Text>
                <Text>ID: {this.ident}</Text>
                </View>
           </TouchableOpacity>  
            
        );
    }
}

const styles= StyleSheet.create({
    itemTexBox: {
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
})