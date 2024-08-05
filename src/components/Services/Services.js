import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from '../PostList/PostList';


const Stack = createNativeStackNavigator();
export default function Services({ navigation, route, posts }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" options={{ headerShown: false }}>
                {(props) => (
                    <PostList
                        {...props}
                        posts={posts} />
                )}
            </Stack.Screen>

        </Stack.Navigator>

    )
}