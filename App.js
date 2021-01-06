import React , {Component, useState}from "react"
import {View,Text,StyleSheet,Button} from "react-native";

class App extends React.Component {
state ={
    firstName:"ysef"
};
 handleNameChange =()=>{
    this.setState({firstName:"ali"});
};
render(){
    return (

        <View style={styles.container}>
          <View style={styles.header}>
              <Text>{this.state.firstName}</Text>
          </View>
            <Text>ali2</Text>
            <Button title="کلیک کن" onPress={ this.handleNameChange}/>
        </View> 
    )
}

}

export default App;


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


