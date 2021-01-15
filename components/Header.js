import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>مدیریت اشخاص</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: "orangered",
        alignItems: "center",


    },
    title: {
        marginTop: 40,
        color: "white",
        fontSize: 20,
        fontWeight: "bold"

    }
});