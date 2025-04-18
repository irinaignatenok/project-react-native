import { StyleSheet } from "react-native";
import { formBackground } from './../../includes/variables'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        borderBottomColor: '#aaa0c2',
        borderBottomWidth: 3,
        paddingTop: 30,
    },
    title: {
        fontSize: 27,
        color: formBackground,
        fontWeight: 'bold',
        paddingLeft: 5,
        letterSpacing: -1.3
    }
})

export default styles;
