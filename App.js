import React from 'react';
import {View, Text, StyleSheet, Keyboard, Alert} from "react-native";
import Header from "./components/Header"
import {useState} from "react";
import {FlatList} from "react-native";
import Person from "./components/Person";
import AddPerson from "./components/AddPerson";


const App = () => {
    const [persons, setPersons] = useState([
        {name: "علی شجراتی", key: "1", completed: false},
        {name: "یوسف شجراتی", key: "2", completed: false}
    ]);
    const [person, setPerson] = useState("")

    const deleteHandler = (key) => {
        setPersons((prevPersons) => prevPersons.filter((p) => p.key != key))
    };

    const submitHandler = () => {
        if (person.length > 3) {

            setPersons([...persons,
                {
                    name: person,
                    key: Math.floor(Math.random() * 1000).toString(),
                    completed: false
                }
            ]);
            setPerson("");
            Keyboard.dismiss();
        } else {
            Alert.alert("توجه", "باید بیش از سه کراکتر باشد", [
                {text: "فهمیدم", onPress: () => console.log("")}
            ]);
        }
    };

    const completedHandler = (key) => {
        const allPersons = [...persons];
        const personIndex = allPersons.findIndex(p => p.key === key);
        const person = allPersons[personIndex];
        person.completed = !person.completed;
        allPersons[personIndex] = person;
        setPersons(allPersons);
    }

    return (
        <View style={styles.container}>
            {/*Header*/}
            <Header/>
            <View style={styles.body}>
                {/*AddPerson*/}
                <AddPerson setPerson={setPerson} person={person} submitHandler={submitHandler}/>
                <FlatList
                    data={persons}
                    renderItem={({item}) => (<Person person={item}
                                                     deleteHandler={deleteHandler}
                                                     completedHandler={completedHandler}
                    />)}
                />
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    body: {
        padding: 20,
        flex: 1
    }
})