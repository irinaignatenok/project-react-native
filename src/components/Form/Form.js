import { Text, Pressable, View, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Form({ navigation, route, onAddForm }) {
    const [liked, setLiked] = useState(false);
    const [savingData, setSavingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [reviewDescription, setReviewDescription] = useState('');


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={handleGoBackPress}>
                    <Ionicons name="chevron-back" size={24} color="#007ACC" />
                </Pressable>
            ),
        });
    }, [navigation]);

    const handleGoBackPress = () => {
        navigation.pop(2);
    };

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
            navigation.goBack();
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                onChangeText={handleDescriptionChange}
                style={styles.textInput}
                multiline={true}
                value={reviewDescription}
            />
            {errorMessage.length > 0 && (
                <Text style={styles.errorMessage}>{errorMessage.join(' ')}</Text>
            )}
            <Pressable style={styles.icons} onPress={handleLabelPressed}>
                <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? "red" : "black"} />
            </Pressable>
            <Button title="Add Review" onPress={handleSavePress} disabled={savingData} />
        </View>
    );
}
