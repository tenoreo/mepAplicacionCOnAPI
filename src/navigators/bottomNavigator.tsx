import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus...
//import plus from './assets/plus.png'

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';

//Importaciones de las Pantallas
import HomeProfesor from '../screens/Profesor/ChatProfesor';
import ChatProfesor from '../screens/Profesor/ChatProfesor';
import CourseProfesor from '../screens/Profesor/CourseProfesor';
import NewsProfesor from '../screens/Profesor/ModalNews';
import ProfileProfesor from '../screens/Profesor/ProfileProfesor';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomNavigation() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
                tabBarLabelStyle:false,
                tabBarStyle:{
                    backgroundColor:'white',
                    position:'absolute',
                    bottom:20,
                    marginHorizontal: 20,
                    
                    height:60,
                    borderRadius:10,

                    shadowColor:'#000000',
                    shadowOpacity:0.06,
                    shadowOffset:{
                        width:10,
                        height:10
                    },
                    paddingHorizontal: 20,

                },
            }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Noticias"} component={HomeProfesor} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? '#0948b3' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Perfil"} component={ProfileProfesor} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? '#0948b3' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"NewsProfesor"} component={NewsProfesor} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: '#0948b3',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                  <FontAwesome5
                name="plus"
                size={20}
                color='white'
              ></FontAwesome5>
                  
                {/* <Image source={plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image> */}
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Cursos"} component={CourseProfesor} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="book"
                size={20}
                color={focused ? '#0948b3' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Chat"} component={ChatProfesor} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="weixin"
                size={20}
                color={focused ? '#0948b3' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: '#0948b3',
        position: 'absolute',
        bottom: 78,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});