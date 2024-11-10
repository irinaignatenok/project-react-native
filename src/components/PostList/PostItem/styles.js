import { StyleSheet } from 'react-native';
import { formBackground } from '../../../includes/variables';

export default StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row'

    },
    image: {
        // width: '100 %',
        // height: 400,
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginVertical: 10,
        paddingRight: 10,
        borderRadius: 10
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: formBackground
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center',
        color: "black",
        paddingBottom: 5
    },
    textContainer: {
        padding: 10,
        lineHeight: 2

    }
})