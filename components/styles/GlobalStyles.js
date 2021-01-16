import  {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
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

    },
    input: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderBottomWidth: 1,
        marginBottom: 10,
        borderBottomColor: "darkgray"

    },
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

})