import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'
import About from './screens/About'
import Home from './screens/Home'
import Details from './screens/Details';
const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "orange",

                },
                headerTitleStyle: {
                    color: "white"
                }
            }}>
                <Stack.Screen name="Home" component={Home} options={{
                    title: "خانه",
                    headerTitleAlign: "center",

                }} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Details" component={Details}
                    initialParams={{ id: "2", text: "خدانگهدار" }}
                    options={{ title: "جزئیات" }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
})
