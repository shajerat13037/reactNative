import React,{useEffect,useCallback} from 'react'
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer,useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack"


const Tab = createBottomTabNavigator();
const SettingStack = createStackNavigator();
const HomeStack = createStackNavigator();




const HomeScreen = ({ navigation }) => {
    return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
<Text>Home+</Text>
<Button title="informaton" onPress={() => navigation.navigate("Information")} />
</View>
    )
};
const Setting = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Setting</Text>
            <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
        </View>
    );
};
const Profile = ({ navigation }) => {
    // useEffect(()=>{
    //     return navigation.addListener("focus",()=>{
    //         alert("hello");
    //     });
    // },[navigation])

useFocusEffect(
    useCallback(()=>{
        //وقتی صفه متمرکز شد
        alert('Focused');
        return ()=>{
            //وقتی ار متمرکز خارچ شد
            alert("UnFocused")
        }
    })
)

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Profile</Text>

        </View>
    );
};

const Information = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Information</Text>
        </View>
    );
};




const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="first">
                    {() => (
                        <SettingStack.Navigator>
                            <SettingStack.Screen name="Setting"
                                component={Setting} />
                            <SettingStack.Screen name="Profile"
                                component={Profile} />
                        </SettingStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="second">
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen name="Home"
                                component={HomeScreen} />
                                <HomeStack.Screen name ="Information"
                                component={Information}/>
                        </HomeStack.Navigator>


                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App

