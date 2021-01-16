import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {styles} from "./styles/GlobalStyles"

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>مدیریت اشخاص</Text>
        </View>
    );
};

export default Header;
