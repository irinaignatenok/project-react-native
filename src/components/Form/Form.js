import { Text, Pressable, View, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Form({ navigation, route, onAddForm }) {
    const [liked, setLiked] = useState(false)
    const { id, title, description, price } = route.params
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={handleGoBackPress}>
                    <Ionicons name="chevron-back" size={24} color="#007ACC" />
                    {/* <Text>Go back</Text> */}
                </Pressable>
            )
        });
    }, [navigation]);

    const handleGoBackPress = () => {
        navigation.pop(2);
    };

    const handleLabelPressed = () => {
        setLiked(!liked)
    }

    return (


        <View style={styles.container}>
            {/* <Text>Invalid data:</Text> */}

            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
            />
            {/* {liked && (
                <Pressable style={styles.icons} onPress={handleLabelPressed}>
                    <AntDesign name="hearto" size={24} color="black" />
                    <AntDesign name="heart" size={24} color="red" />
                </Pressable>

            )} */}
            <Pressable style={styles.icons} onPress={handleLabelPressed}>
                <AntDesign name={!liked ? "heart" : "hearto"} size={24} color={liked ? "red" : "red"} />
                {/* <AntDesign name="heart" size={24} color="red" /> */}
            </Pressable>


            <Button title="Add Review" />


        </View>

    )
}