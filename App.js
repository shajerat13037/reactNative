import React from 'react'
import {Button,View} from "react-native";
import {createDrawerNavigator,useIsDrawerOpen} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";



const HomeScreen = ({navigation}) => {
    const isDrawerOpen=useIsDrawerOpen();
    console.log(isDrawerOpen);
    return (
     <View style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
         <Button onPress={()=>navigation.navigate("Information")} title="صفه اطلاعات"/>
     <View style={{marginBottom:20}}></View>
     </View>
    );
};

const Information = ({navigation}) => {
    return (
     <View style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
         <Button onPress={()=>navigation.navigate("Home")} title="صفه خانه"/>
     <View style={{marginBottom:20}}>
         <Button onPress={()=>navigation.openDrawer()} title="دراور"/>

     </View>
     <View style={{marginBottom:20}}>
         <Button onPress={()=>navigation.toggleDrawer()} title="toggle"/>

     </View>
     </View>
    );
};



const Drawer =createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"  
            drawerPosition="right"
            drawerStyle={{
                backgroundColor: "orange",
                width:250,
            }}
            drawer
            >
                <Drawer.Screen 
               
                name="Home" component={HomeScreen}/>
                <Drawer.Screen
                 name="Information"
                  component={Information}
                  options={{
                      title:"info",
                  }}
                  />
            </Drawer.Navigator>
        </NavigationContainer>
        );
};

export default App

