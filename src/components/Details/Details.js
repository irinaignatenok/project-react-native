import { Text, View, Image, ScrollView } from 'react-native';
import { useEffect } from 'react';
import imageMapping from '../../../assets/imageMapping';
import styles from "./styles";
import * as database from '../../database/index';


export default function Details({ navigation, route }) {
    const { post, reviews } = route.params;
    console.log("Rev", reviews)
    const { id, title, description, image, price } = post;


    useEffect(() => {


        (async () => {
            console.log("My data")

            const data = await database.load()
            console.log("Loadeed data", data)
        })
        navigation.setOptions({ title: title })
    }, [navigation, title])

    const getImageSource = (imageName) => {
        return imageMapping[imageName] || defaultImage;
    };



    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={getImageSource(image)}
                    style={styles.image}
                />
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>


            </ScrollView>

        </View>
    )
}