import React from 'react';
import {View, TextInput, Button, StyleSheet} from "react-native";
import {styles} from "./styles/GlobalStyles"

const AddPerson = ({setPerson, person, submitHandler}) => {
    return (
        <View>
            <TextInput style={styles.input}
                       placeholder="شخص جدید"
                       placeholderTextColor="orange"
                       onChangeText={setPerson}
                       value={person}
            />
            <Button
                onPress={submitHandler}
                color="orange"
                title="اصافه کردن اشخاص"
            />
        </View>
    );
};

export default AddPerson;
