// src/components/PostList/PostList.js
import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import PostItem from './PostItem/PostItem'; // Path to PostItem component




export default function PostList({ navigation, route, posts, reviews }) {
    const handlePostPress = (post) => {
        // Find the corresponding review for the post
        // const rev = reviews.find(review => review.postId === post.id);

        // Pass both post and review to the Details screen
        navigation.navigate('Details', { post, reviews });
    };
    return (
        <ScrollView>
            {posts.map((post, index) => {
                return (
                    <Pressable key={index} onPress={() => handlePostPress(post)}>
                        <PostItem
                            // key={post.id}
                            post={post} // Pass the entire post object to PostItem
                            reviews={reviews}
                        />
                    </Pressable>


                )
            }



            )}
        </ScrollView>
    );
};

