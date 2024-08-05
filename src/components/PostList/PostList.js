// src/components/PostList/PostList.js
import React from 'react';
import { ScrollView } from 'react-native';
import PostItem from './PostItem/PostItem'; // Path to PostItem component

const PostList = ({ posts }) => {
    return (
        <ScrollView>
            {posts.map((post, index) => (
                <PostItem
                    key={index}
                    post={post} // Pass the entire post object to PostItem
                />
            ))}
        </ScrollView>
    );
};

export default PostList;
