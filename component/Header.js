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
        height: 100,
        backgroundColor: "orange",
    },
    title: {
        marginTop: 50,
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"

    }
})