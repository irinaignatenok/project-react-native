import { StyleSheet } from "react-native";
import { secondaryColor } from "../../includes/variables";

export default StyleSheet.create({
    container: {
        padding: 10
    },
    label: {
        fontSize: 17,
        color: '#007ACC',
        marginTop: 10,
        paddingBottom: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff'

    },
    icons: {
        paddingTop: 10
    },
    buttonAdd: {
        borderColor: '#007ACC',
        padding: 10,
        color: '#fff'
    }
})