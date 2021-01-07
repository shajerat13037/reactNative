import React, { Component, useState } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {
    const [fullname, setfullname] = useState();
    const [age, setAge] = useState();
    return (
        <View style={styles.container}>
            <View style={{
                marginBottom: 20,
                backgroundColor: "orange",
                width: 300,
                borderRadius: 10,
                direction: "rtl"

            }}>
                <Text style={styles.label}>نام خانوارگی:{fullname}</Text>
                <Text>سن :{age}</Text>

            </View>
            <Text>:نام ونام خانوارگی</Text>
           
            <TextInput style={styles.textinput} onChangeText={val=>{setfullname(val)}}
            multiline />
          
            <Text>:سن شما</Text>
           
            <TextInput style={[styles.textinput,{width:100}]} keyboardType="numeric" 
            onChangeText={value=>setAge(value)} multiline/>
      
        </View>
    )
}


export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "wieth"
    },
    label: {
        fontSize: 18,
        fontWeight: "bold"
    },
    textinput: {
        
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 10,
        padding: 5,
        margin: 10,
        width: 250,
        textAlign: "center"
    }

});
<<<<<<< HEAD
import React, { useState } from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'

const App = () => {
    const [name, setname] = useState([
        { id: 1, fullname: "ali" },
        { id: 2, fullname: "ysef" },
        { id: 3, fullname: "reza" },
        { id: 4, fullname: "reza" },
        { id: 6, fullname: "reza" },
        { id: 7, fullname: "reza" },
        { id: 8, fullname: "reza" },
        { id: 9, fullname: "reza" },
       
    ]
    )
    return (
        <View style={styles.container}>
           <ScrollView>
           {name.map((m) =>  (
                    <View key={m.id}>
                        <Text style={styles.card}>{m.fullname}</Text>
                    </View>
                )
            )}
           </ScrollView>
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
        color:"white"
    }
})
=======

>>>>>>> 1bd7f94fd858c12b4712cbf6f82956ffff2776dc

