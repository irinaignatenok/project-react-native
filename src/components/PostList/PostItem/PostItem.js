import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Ensure this path is correct
import imageMappings from '../../../../assets/imageMapping';// Ensure this path is correct
// import defaultImage from '../../../../assets/default.png'; // Ensure this path is correct

export default function PostItem({ post, rev }) {
    const { title, image, description, price } = post;

    // Function to get the image source
    const getImageSource = (imageName) => {
        if (imageMappings[imageName]) {
            return imageMappings[imageName];
        } else {
            console.error('Image not found:', imageName);
            // return defaultImage; // Use the default image
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image
                source={getImageSource(image)}
                style={styles.image}
            />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>

        </View>
    );
}
