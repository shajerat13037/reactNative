import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from "./styles/GlobalStyles"

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
