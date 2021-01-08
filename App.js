import React, { useState } from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'

const App = () => {
    const [name, setname] = useState([
        { id: "1", fullname: "alimineBranch2" },
        { id: "2", fullname: "ysef" },
        { id: "3", fullname: "reza" },
        { id: "4", fullname: "reza" },
        { id: "6", fullname: "reza" },
        { id: "7", fullname: "reza" },
        { id: "8", fullname: "reza" },
        { id: "9", fullname: "reza" },
       
    ]
    )
    return (
        <View style={styles.container}>
           <FlatList
           keyExtractor={item=>item.id} 
           horizontal={true}
        //    numColumns={2}
            data={name} renderItem={({item:m})=>(
               <Text style={styles.card}>{m.fullname}</Text>
               
           )}/>
           
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20

    },
    card:{
        marginTop:100,
        padding:24,
        backgroundColor:"teal",
        fontSize:24,
        textAlign:"center",
        color:"white",
        margin:10
    }
})

