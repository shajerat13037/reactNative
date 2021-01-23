import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'




const Details = ({navigation,route}) => {
const {id,text}=route.params;
   return (
      <View style={styles.container}>
         <Text>"جزئیات"</Text>
       <View styles={styles.seperator}>
          <Text>{id}</Text>
          <Text>{text}</Text>
       </View>
       <View styles={styles.seperator}>
          <Button title="بروزرسانی" onPress={()=>navigation.setOptions({title:"بروزرسانی"})}/>
       </View>
      </View>
   )
}

export default Details

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
