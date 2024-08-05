import { StyleSheet } from 'react-native';
import { formBackground } from '../../../includes/variables';

export default StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: '100 %',
        height: 400,
        resizeMode: 'cover',
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: formBackground
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: formBackground
    },
})