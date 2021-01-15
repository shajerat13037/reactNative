import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

const Person = ({person, deleteHandler, completedHandler}) => {
    return (
        <TouchableOpacity onPress={() => completedHandler(person.key)}
        >
            <View style={styles.persons}>
                <MaterialIcons name="delete" size={18} color="coral" onPress={() => deleteHandler(person.key)}/>
                <Text
                    style={[styles.personTitle, person.completed ? {textDecorationLine: "line-through"} : {}]}>{person.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Person;

const styles = StyleSheet.create({
    persons: {
        paddingHorizontal: 20,
        flexDirection: "row",
        borderColor: "orange",
        borderWidth: 1,
        marginTop: 15,
        alignItems: "center",
        height: 50,
        justifyContent: "space-between",
        borderRadius: 20,

    },
    personTitle: {
        fontSize: 18,
        color: "black",

    }

})