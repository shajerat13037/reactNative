import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

const Person = ({person, deleteHandler}) => {
    return (

        <TouchableOpacity
            onPress={() => {
                deleteHandler(person.key)
            }}
            style={styles.body}>
            <Text style={styles.person}>{person.name}</Text>
        </TouchableOpacity>
    );
};

export default Person;

const styles = StyleSheet.create({
    body: {
        marginTop: 20,
        borderColor: "orange",
        borderWidth: 1,
        alignItems: "center",
        height: 40,
        borderRadius: 20,
        justifyContent: "center"
    },
    person: {
        fontSize: 20,

    }
})