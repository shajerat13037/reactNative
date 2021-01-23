import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
   return (
      <View style={styles.container}>
         <Text>About</Text>
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
   }
})
