import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { FC } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar,
    Animated, TouchableOpacity, Modal, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Input, Button } from '../../components';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      curso: 'Matematicas',
      horario: 'Viernes 9:00am a 12:00pm',
      idCurso: '1234',
      grado: '2'

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      curso: 'Matematicasno',
      horario: 'Viernes 9:00am a 12:00pm',
      idCurso: '1234',
      grado: '2'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
      curso: 'Matematicas',
      horario: 'Viernes 9:00am a 12:00pm',
      idCurso: '1234',
      grado: '2'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        curso: 'Matematicas',
        horario: 'Viernes 9:00am a 12:00pm',
        idCurso: '1234',
        grado: '2'
    },
  ];

  const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
        //   duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={style.modalBackGround}>
          <Animated.View
            style={[style.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

const App : FC = (props) => {
    const [visible, setVisible] = React.useState(false);

    const Item = ({title, curso, horario, idCurso, grado}) => (

      <TouchableOpacity onPress={() => { setVisible(true)}} style={style.item}>
    
            <ModalPoup visible={visible}>
                <View style={{alignItems: 'center'}}>
                <View style={style.header}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                    <Image
                        source={require('../../assets/letra-x.png')}
                        style={{height: 30, width: 30}}
                    />
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={style.title}>Información</Text>
                    <Text></Text>
                </View>
        
                <Text style={style.title}>Curso: {curso}</Text>
                <Text style={style.title}>Horario: {horario}</Text>
                <Text style={style.title}>ID: {idCurso}     Grado: {grado}</Text>

                <View style={style.btnsImegContainer}>
                  <View style={style.btnImegContainerPeligro}>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/eliminar.png')}
                          style={style.btnImeg}
                        />
                      </TouchableOpacity>
                  </View>

                  <View style={style.btnImegContainer}>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/estudiante.png')}
                          style={style.btnImeg}
                        />
                      </TouchableOpacity>
                    </View>

                    <View style={style.btnImegContainer}>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/editar.png')}
                          style={style.btnImeg}
                        />
                      </TouchableOpacity>
                    </View>
                </View>
            </ModalPoup>
        
            <View style={style.itemText}>
            <Text style={style.title}>Curso: {curso}</Text>
            <Text style={style.title}>Horario: {horario}</Text>
            <Text style={style.title}>ID: {idCurso}     Grado: {grado}</Text>
            </View>

            </TouchableOpacity>
    );

    const renderItem = ({ item }) => (

        <Item title={item.idCurso}
            curso={item.curso}
            horario={item.horario}
            idCurso={item.idCurso}
            grado={item.grado}
        />
    );
     
    return (
        <View style={style.container}>
            <View style={style.containertitulo}>
                <Text style={style.titulo}>GESTION CURSOS</Text>
            </View>
            <View style={style.btnImegContainerPlus}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/plus.png')}
                  style={style.btnImeg}
                />
              </TouchableOpacity>
            </View>
            <View style={style.containerButton}>

                <SafeAreaView style={style.containerList}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    />
                </SafeAreaView>
            </View>
        </View>
    ) 
}

export default App;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containertitulo: {
        height: '15%',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 25,
        color : 'black',
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#E3EDFE',
        opacity: 50,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1C7ED6'
    },
    itemText: {
      marginVertical: 8,
      marginHorizontal: 16,
  },
    title: {
        fontSize: 20,
    },
    containerList: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },  modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        justifyContent: 'space-evenly',
        flex: 1
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
      },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    btnEdit: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.1
    },
    btnImeg: {
      height: 40,
      width: 40,
    },
    btnImegContainer: {
      position: 'relative',
      marginLeft: 10,
      marginTop: 5,
      left: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#748FFC',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 9},
      shadowOpacity: 0.1,
      elevation: 7,
      height: 60,
      width: 60,
    },
    btnImegContainerPeligro: {
      position: 'relative',
      marginLeft: 10,
      marginTop: 5,
      left: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D8383D',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 9},
      shadowOpacity: 0.1,
      elevation: 7,
      height: 60,
      width: 60,
    },
    btnImegContainerPlus: {
      position: 'absolute',
      marginLeft: 10,
      marginTop: 5,
      bottom: 10,
      right:10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#748FFC',
      borderRadius: 30,
      shadowColor: 'black',
      shadowOffset: {width: 4, height: 9},
      shadowOpacity: 0.1,
      elevation: 7,
      height: 60,
      width: 60,
    },
    btnsImegContainer: {
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      flexDirection: 'row',
      width: '100%',
    }

})