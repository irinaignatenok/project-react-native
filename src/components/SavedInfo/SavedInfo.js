import { Text, Pressable, View, TextInput, Button, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import styles from './styles';
import * as database from '../../database/index';

export default function SavedInfo({ onAddForm, reviews }) {
    const [savingData, setSavingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [reviewDescription, setReviewDescription] = useState('');
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const reviewsFromFirebase = await database.load();
                const reviewsWithLikes = reviewsFromFirebase.map(review => ({
                    ...review,
                    likes: review.likes || 0,
                    liked: false, // Initialize liked state for each review
                }));
                setReviewList(reviewsWithLikes);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        getReviews();
    }, [reviews]);

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
            await onAddForm(reviewDescription, false); // Passing `false` for `liked` when adding a new review
            setSavingData(false);
            setReviewDescription("");
            setErrorMessage([]);
        }
    };

    const handleLikePress = async (index) => {

        const updatedReviews = [...reviewList];
        updatedReviews[index].likes = (updatedReviews[index].likes || 0) + 1;
        updatedReviews[index].liked = true;
        setReviewList(updatedReviews);

        // Update the review in the database
        try {
            await database.update(updatedReviews[index].id, updatedReviews[index]);
        } catch (error) {
            console.error('Error updating like count:', error);
            updatedReviews[index].likes -= 1;
            updatedReviews[index].liked = false;
            setReviewList(updatedReviews);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.label}>Title:</Text>
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
                    {reviewList.length > 0 ? (
                        reviewList.map((review, index) => (
                            <View key={review.id} style={styles.reviewContainer}>
                                <Text style={styles.reviewText}>{review.description}</Text>
                                <View style={styles.likesContainer}>
                                    <Text style={styles.likedText}>{review.likes}</Text>
                                    <Pressable onPress={() => handleLikePress(index)}>
                                        <AntDesign
                                            name={review.liked ? "like1" : "like2"}
                                            size={24}
                                            color={review.liked ? "red" : "black"}
                                        />
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
