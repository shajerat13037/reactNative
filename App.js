import React from 'react'
import { StyleSheet, Text, View ,StatusBar,Platform} from 'react-native'

const App = () => {
    return (
        <View>
            <Text style={styles.toplearn}>alishajerat</Text>
        </View>
    )
}

export default App


const styles = StyleSheet.create({
    toplearn:{
        marginTop:StatusBar.currentHeight,
        fontSize:     Platform.OS==="android" ? 18:20,
        ...Platform.select({
            ios:{
                //require("./component.js")
                fontSize:20,
                fontFamily:"Roboto",
                color:"tomato"
            },
            android:{
                //require("./component.js")
                fontSize:16,
                color:"blue"
            }
        })
  
    }
})
