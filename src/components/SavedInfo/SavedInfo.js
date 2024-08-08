import { Text, Pressable, View, TextInput, Button, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as database from '../../database/index'

export default function SavedInfo({ onAddForm, reviews }) {
    const [liked, setLiked] = useState(false);
    const [savingData, setSavingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [reviewDescription, setReviewDescription] = useState('');
    const [review, setReview] = useState([])
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const reviewsFromFirebase = await database.load();
                const reviewsWithLikes = reviewsFromFirebase.map(review => ({
                    ...review,
                    likes: review.likes || 0,
                }));
                setReviewList(reviewsWithLikes);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        getReviews();
    }, []);
    const handleLabelPressed = () => {
        setLiked(!liked);
    };

    const handleDescriptionChange = (value) => {
        setReviewDescription(value);
    };

    const handleSavePress = async () => {
        const validate = [];
        if (reviewDescription === "") {
            validate.push('The description is required.');
        }

        if (validate.length > 0) {
            setErrorMessage(validate);
        } else {
            setSavingData(true);
            await onAddForm(reviewDescription, liked);
            setSavingData(false);
            setReviewDescription("")
            setErrorMessage("")
            setLiked(false)

        }
    };

    const handleLikePress = async (index) => {
        const updatedReviews = [...review];
        updatedReviews[index].likes = (updatedReviews[index].likes || 0) + 1;

        setReviewList(updatedReviews);
        // Update the review in the database
        await database.update(updatedReviews[index].id, updatedReviews[index]);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.label}>Title:</Text>
                    <Pressable style={styles.icons} onPress={handleLabelPressed}>
                        <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? "red" : "black"} />
                    </Pressable>
                </View>

                <TextInput
                    onChangeText={handleDescriptionChange}
                    style={styles.textInput}
                    multiline={true}
                    value={reviewDescription}
                />
                {errorMessage.length > 0 && (
                    <Text style={styles.errorMessage}>{errorMessage.join(' ')}</Text>
                )}

                <Button title="Add Review" onPress={handleSavePress} disabled={savingData} />
            </View>
            <View style={styles.containerReviews}>
                <ScrollView>
                    {review.length > 0 ? (
                        reviewList.map((review, index) => (
                            <View key={index} style={styles.reviewContainer}>
                                <Text style={styles.reviewText}>{review.description}</Text>
                                <View style={styles.likesContainer}>
                                    <Text style={styles.likedText}>{review.likes}</Text>
                                    <Pressable onPress={() => handleLikePress(index)}>
                                        <AntDesign name="like2" size={24} color="black" />
                                    </Pressable>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text>No reviews available for this post.</Text>
                    )}
                </ScrollView>
            </View>
        </>

    );
}
