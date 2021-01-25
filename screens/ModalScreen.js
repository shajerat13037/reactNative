import React from 'react'
import {View,Text,Button} from "react-native";


const ModalScreen = ({ navigation }) => {
   return (
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
           <Text>Modal</Text>
           <Button title="Dismiss" onPress={() => navigation.goBack()} />
       </View>
   );
};

export default ModalScreen;