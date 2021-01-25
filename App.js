import React from 'react'
import {Button,View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons"


const HomeScreen = ({navigation}) => {
   

    return (
     <View style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
         <Button onPress={()=>navigation.navigate("Information")} title="صفه اطلاعات"/>
     <View style={{marginBottom:20}}>
         <Ionicons name="ios-information-circle"/>
     </View>
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



const Tab =createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={({route})=>({
              tabBarIcon:({focused,color,size})=>{
                  let iconName; 
                  if(route.name ==="Home"){
                      iconName=focused ? "ios-information-circle":
                      "ios-information-circle-outline"
                  }else if(route.name=== "Information"){
                      iconName = focused ? "ios-list-box" :"ios-list"
                  }
                  return(
                    <Ionicons name={iconName} size={size} color={color}/>
                  );
              }
          })}
          tabBarOptions={{
              activeTintColor:"tomato",
              inactiveTintColor:"gray"
          }}>
              <Tab.Screen name="Home" component={HomeScreen}/>
              <Tab.Screen name="Information" component={Information}
              options={{
             title:"info",
             tabBarVisible:false,
             }}/>
          </Tab.Navigator>
        </NavigationContainer>
        );
};

export default App

