// src/components/PostList/PostList.js
import React from 'react';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import PostItem from './PostItem/PostItem'; // Path to PostItem component




export default function PostList({ navigation, route, posts, reviews }) {
    const handlePostPress = (post) => {

        navigation.navigate('Details', { post, reviews });
    };

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handlePostPress(item)}>
            <PostItem
                post={item}
                reviews={reviews}
            />
        </Pressable>
    )
    return (
        <View>
            {/* <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> */}
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}


            />

        </View>
        // <ScrollView>
        //     {posts.map((post, index) => {
        //         return (
        //             <Pressable key={index} onPress={() => handlePostPress(post)}>
        //                 <PostItem
        //                     // key={post.id}
        //                     post={post} // Pass the entire post object to PostItem
        //                     reviews={reviews}
        //                 />
        //             </Pressable>


        //         )
        //     }



        //     )}
        // </ScrollView>

    );
};

