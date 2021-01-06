import React , {useState}from "react"
import {View,Text,StyleSheet,Button} from "react-native";


const App =()=>{
    const [firstName,setfirstName]= useState("علی");
   const handleNameChange =()=>{
       setfirstName("shajerat")
   }
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text>{firstName}</Text>
          </View>
            <Text>ali2</Text>
            <Button title="کلیک کن" onPress={handleNameChange}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"wieth"
    },
    header:{
        backgroundColor:"aqua"
    }
});


export default App;