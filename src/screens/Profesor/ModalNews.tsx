import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default  function ModalNews(){
    return(
        <View>
            <Text>Modal News Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})