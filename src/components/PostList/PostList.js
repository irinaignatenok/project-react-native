// src/components/PostList/PostList.js
import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import PostItem from './PostItem/PostItem'; // Path to PostItem component




export default function PostList({ navigation, route, posts }) {
    const handlePostPress = (post) => {
        navigation.navigate('Details', post)
    }
    return (
        <ScrollView>
            {posts.map((post, index) => {
                return (
                    <Pressable key={index} onPress={() => handlePostPress(post)}>
                        <PostItem
                            // key={post.id}
                            post={post} // Pass the entire post object to PostItem
                        />
                    </Pressable>


                )
            }



            )}
        </ScrollView>
    );
};

