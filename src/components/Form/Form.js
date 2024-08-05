import { Text, Pressable } from 'react-native';
import { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Form({ navigation, route, onAddForm }) {
    const { id, title, description, price } = route.params
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={handleGoBackPress}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                    {/* <Text>Go back</Text> */}
                </Pressable>
            )
        });
    }, [navigation]);

    const handleGoBackPress = () => {
        navigation.popToTop();
    };

    return (
        <>

        </>

    )
}