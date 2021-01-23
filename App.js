import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import About from './screens/About'
import Home from './screens/Home'
const Stack= createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
<Stack.Screen name="Home" component={Home}/>
<Stack.Screen name="About" component={About}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: "white",
       alignItems:"center",
       justifyContent:"center"
    }
 })
 