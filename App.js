import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
         <Text>hello World</Text>
         {/* <Image source={require("./assets/icon.png")}/> */}
        <Image source={{uri:"https://picsum.photos/200/300",
        width:200,
        height:300,
        }}
        blurRadius={0}
        fadeDuration={1000}
        />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
       alignItems:"center",
       justifyContent:"center"
    },
  
});
