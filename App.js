import React, {useState} from 'react';
import {View, Alert, FlatList, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import Header from "./component/Header";
import Person from "./component/Person";
import AddPerson from "./component/AddPerson";

const App = () => {
    const [persons, setPersons] = useState([
        {name: "علی شجراتی", key: "1"},
        {name: "یوسف شجراتی", key: "2"},
        {name: "علی شجراتی", key: "3"},
        {name: "یوسف شجراتی", key: "4"},
    ]);
    const [person, setPerson] = useState("")
    const deleteHandler = (key) => {
        setPersons((prePersons) => prePersons.filter((p) => p.key != key));
    };
    const submitHandler = () => {
        if (person.length > 3) {

            setPersons((prevPersons) => [
                ...prevPersons,
                {
                    name: person,
                    key: Math.floor(Math.random() * 1000).toString()
                }
            ]);
            setPerson("");
            Keyboard.dismiss();
        } else {
            Alert.alert("منو", "مقدار کت", [
                {text: " فهمیدم", onPress: () => console.log("alert closed")}
            ])
        }
    }
    return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.container}>
               {/*{Header}*/}
               <Header/>
               <View style={styles.body}>
                   {/*Add Person*/}
                   <AddPerson
                       submitHandler={submitHandler}
                       setPerson={setPerson}
                       person={person}
                   />
                   <View>
                       <FlatList
                           data={persons}
                           renderItem={({item}) => (<Person person={item} deleteHandler={deleteHandler}/>)}
                       />
                   </View>
               </View>
           </View>
       </TouchableWithoutFeedback>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "aqua"
    },
    body: {
        padding: 20,
    }
})