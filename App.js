import React from 'react'
import {Button,View,Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack"

const Tab =createBottomTabNavigator();
const Stack= createStackNavigator();



const HomeScreen = ({navigation}) => {
 return(
     <Tab.Navigator>
         <Tab.Screen name="Settings" component={Setting}/>
         <Tab.Screen name="Profile" component={Profile}/>
     </Tab.Navigator>

 )
};
const Setting = ({navigation}) => {
    return (
     <View style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
    <Text>Setting</Text>
<Button title="informaton" onPress={()=>navigation.navigate("Information")}/>
     </View>
    );
};
const Profile = ({navigation}) => {
    return (
     <View style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
<Text>Profile</Text>
    
     </View>
    );
};

const Information = ({navigation}) => {
    return (
     <View style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
         <Button onPress={()=>navigation.navigate("Home")} title="صفه خانه"/>
     <View style={{marginBottom:20}}>

     </View>
     
     </View>
    );
};




const App = () => {
    return (
        <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen}/>
           <Stack.Screen name="Information" component={Information}/>
       </Stack.Navigator>
        </NavigationContainer>
        );
};

export default App

