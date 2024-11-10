
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from '../PostList/PostList';
import Details from '../Details/Details';



const Stack = createNativeStackNavigator();
export default function Services({ navigation, route, posts, onAddForm, reviews }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" options={{ headerShown: false }}>
                {(props) => (
                    <PostList
                        {...props}
                        posts={posts}
                        reviews={reviews} />
                )}
            </Stack.Screen>
            <Stack.Screen name='Details'
                options={{ title: "Add a new Post" }}>
                {(props) => (
                    <Details
                        {...props}
                        reviews={reviews} />
                )}


            </Stack.Screen>



        </Stack.Navigator>

    )
}