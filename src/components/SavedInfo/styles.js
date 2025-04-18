import { StyleSheet } from "react-native";
import { secondaryColor } from "../../includes/variables";
import { taskBackground } from "../../includes/variables";

export default StyleSheet.create({
    container: {
        padding: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        backgroundColor: '#fff',
        marginBottom: 15

    },
    errorMessage: {
        fontSize: 18,
        color: '#c00',
        paddingBottom: 15
    },
    icons: {
        paddingTop: 10
    },
    buttonAdd: {
        borderColor: '#007ACC',
        padding: 10,
        color: '#fff'
    },
    containerReviews: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: taskBackground
    },
    reviewContainer: {
        backgroundColor: secondaryColor,
        margin: 7,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#aaa0c2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, reviewText: {
        fontSize: 16,

    },
    noData: {
        fontSize: 18,
        color: '#4A90E2', // Soft blue color
        textAlign: 'center',
        fontWeight: '600',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#4A90E2',
        borderRadius: 8,
        backgroundColor: '#F3F8FD', // Light background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    }
})