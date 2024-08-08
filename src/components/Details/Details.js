import { Text, View, Image, Button, Pressable, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import imageMapping from '../../../assets/imageMapping';
import styles from "./styles";
import * as database from '../../database/index';
import { loadById } from '../../database/read'

export default function Details({ navigation, route }) {
    const { post, reviews } = route.params;
    console.log("Rev", reviews)
    const { id, title, description, image, price } = post;
    const [review, setReview] = useState(null)
    const [liked, setLiked] = useState(null)
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        //     (async () => {
        //         const data = await loadById(id)
        //         if (data) {
        //             setLiked(data.liked)
        //             setReview(data.review)
        //         } else {
        //             setNotFound(true)
        //         }
        //     })()
        // }, [])

        (async () => {
            console.log("My data")

            const data = await database.load()
            console.log("Loadeed data", data)
        })
        navigation.setOptions({ title: title })
    }, [navigation, title])

    const getImageSource = (imageName) => {
        return imageMapping[imageName] || defaultImage; // Use default image if not found
    };

    const handleSubmitButton = (id) => {
        navigation.navigate("Submit", id)
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={getImageSource(image)}
                    style={styles.image}
                />
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <View key={index} style={styles.reviewContainer}>
                            <Text style={styles.reviewText}>{review.description}</Text>
                            <Text style={styles.likedText}>Liked: {review.liked ? 'Yes' : 'No'}</Text>
                        </View>
                    ))
                ) : (
                    <Text>No reviews available for this post.</Text>
                )}
                <Button title="Add review" onPress={() => { handleSubmitButton(id) }} />


            </ScrollView>

        </View>
    )
}