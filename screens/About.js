import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Seperator=()=>{
   return  <View style={styles.seperator}></View>
};
const About = ({navigation}) => {

   return (
      <View style={styles.container}>
         <Text>About</Text>
         <Button title="برگشت به خانه" onPress={()=>navigation.navigate("Home")} />
        <Seperator/>
         <Button title="برگشت ه" onPress={()=>navigation.goBack()} />
        <Seperator/>
         <Button title="برگشت درباره" onPress={()=>navigation.push("About")} />
        <Seperator/>
         <Button title="برگشت به بالا" onPress={()=>navigation.popToTop("About")} />
      </View>
   )
}

export default About

const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: "white",
      alignItems:"center",
      justifyContent:"center"
   },
   seperator:{
      marginVertical:10,
   }
})
