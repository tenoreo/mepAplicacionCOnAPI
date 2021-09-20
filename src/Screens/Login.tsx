import React,{useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {FontAwesome,Feather} from '@expo/vector-icons';
import firebase from 'firebase';
import {LoginS} from '../Constants';
import {HLogin} from '../Constants/type';

 

const Login =(props:HLogin)=>{
    const [respuesta,setRespuesta]=useState<any>([{respuesta:'',tipoUsuario:''}]);
    const [data,setData]=React.useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
    });
    //Para logiarse a la aplicacion
     const obtenerAccesso=async ()=>{
         await firebase.firestore().collection('Usuario').where('Correo','==',data.email).where('Cedula','==',data.password).get().then(
             snapshot=>{
                 const temp:any[]=[];
                 snapshot.forEach(doc=>{
                     if(snapshot.empty){
                         temp.push({respuesta:false,tipoUsuario:'No tiene'});
                     }
                     temp.push({respuesta:true,tipoUsuario:doc.data().TipoUsuario});
                 });
                 setRespuesta(temp);
                }
         );
         tipoUsuario();
     }
     //para verificar que usuario es segun la respuesta obtenida
    const tipoUsuario=()=>{
        if(respuesta.respuesta){
            if(respuesta.tipoUsuario==='Docente'){
                props.navigation.navigate(LoginS.ProfesorN);
            }else if(respuesta.tipoUsuario==='Estudiante'){
                props.navigation.navigate(LoginS.EstudianteN);
            }else{
                props.navigation.navigate(LoginS.AdministradorN);
            }
        }
    }
    

    const textInputChange= (val:any)=>{
        if(val.lenght!=0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            });
        }
    }

    const handlePasswordChange=(val:any)=>{
        setData({
            ...data,
            password:val
        })
    }

    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        });
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#0948b3' barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenido</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                    name='user-o'
                    color='#0948b3'
                    size={20}/>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                         <Animatable.View
                         animation='bounceIn'
                        >
                            <FontAwesome 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                    : null}
                </View>
                <Text style={[styles.text_footer,
                    {marginTop:35}]}>Contraseña</Text>
                <View style={styles.action}>
                    <Feather 
                    name='lock'
                    color='#0948b3'
                    size={20}/>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={data.secureTextEntry?true :false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={obtenerAccesso} style={styles.signIn}>
                        <Text style={[styles.textSign,{color:'#fff'}]}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity 
                    style={[styles.signIn2,{
                        borderColor:'#0948b3',
                        borderWidth:1,
                        marginTop:15}]}>
                        <Text style={[styles.textSign,{
                            color:'#0948b3'
                            }]}>Registrarse</Text>
                    </TouchableOpacity> */}
                </View>
            </Animatable.View>
        </View>
    );
}

export default Login;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#0948b3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
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
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        backgroundColor: '#0948b3',
        
    },textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn2:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        backgroundColor: '#fff',
    }
    
  });