import React from 'react'
import { StyleSheet, Text, View ,SectionList} from 'react-native'
const data=[
    {
        header:"علی",
        data:["python","nodejs","java","react"],
        footer:"اتمام"
    },
    {
        header:"علی",
        data:["python","nodejs","java","react"],
        footer:"اتمام"
    },

];
const App = () => {
    return (
        <View style={styles.container}>
           <SectionList 
           sections={data}
           keyExtractor={(item,index)=> {
            console.log(item + index);
            return item + index
        }}
        renderItem={({item}) =>(
            <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
            </View>
        )}
          renderSectionHeader={({section:{header}}) =>(
              <Text style={styles.header}>{header}</Text>
          )}
          renderSectionFooter={({section:{footer}}) =>(
              <Text style={styles.header}>{footer}</Text>
          )}
          />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: "lightgrey",
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
});
