import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    image: {
        width: '100 %',
        height: 400,
        resizeMode: 'cover',
        marginVertical: 10,
    }, description: {
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
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        letterSpacing: 0.5,
        marginBottom: 5,
    }
})