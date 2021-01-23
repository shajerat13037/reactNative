import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'


const Home = (props) => {
    const pressHandler =()=>{
        props.navigation.navigate("Details",{id:"1",text:"سلام"})
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="next" />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{ 
       flex: 1,
       backgroundColor: "white",
       alignItems:"center",
       justifyContent:"center"
    }
 })
 