import { Text, View, Image, Button, Pressable } from 'react-native';
import { useEffect } from 'react';
import imageMapping from '../../../assets/imageMapping';
import styles from "./styles"

export default function Details({ navigation, route }) {
    const { id, title, description, image, price } = route.params

    useEffect(() => {
        navigation.setOptions({ title: title })
    }, [])

    const getImageSource = (imageName) => {
        return imageMapping[imageName] || defaultImage; // Use default image if not found
    };

    const handleSubmitButton = (id) => {
        navigation.navigate("Submit", id)
    }


    return (
        <View style={styles.container}>
            <Image
                source={getImageSource(image)}
                style={styles.image}
            />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
            <Pressable>
                {/* <Button> */}
                <Text style={styles.submitButton}>Submit form</Text>
                {/* </Button> */}
            </Pressable>
            <Button title="Add review" onPress={() => { handleSubmitButton(id) }} />

        </View>
    )
}