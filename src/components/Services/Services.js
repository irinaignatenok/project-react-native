import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from '../PostList/PostList';
import Details from '../Details/Details';
import Form from '../Form/Form';


const Stack = createNativeStackNavigator();
export default function Services({ navigation, route, posts, onAddForm }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" options={{ headerShown: false }}>
                {(props) => (
                    <PostList
                        {...props}
                        posts={posts} />
                )}
            </Stack.Screen>
            <Stack.Screen name='Details' component={Details} />
            {/* <Stack.Screen name="Submit" component={Form} /> */}
            <Stack.Screen
                name="Submit"
                options={{ title: "Add a new Post" }}
            >
                {(props) => (
                    <Form
                        {...props}
                        onAddForm={onAddForm}
                    />
                )}
            </Stack.Screen>


        </Stack.Navigator>

    )
}