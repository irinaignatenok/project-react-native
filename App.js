import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header/Header';
import styles from './src/styles/main';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from './src/components/Services/Services';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import SavedInfo from './src/components/SavedInfo/SavedInfo';
import uuid from 'react-uuid';
import AppLoader from './src/components/AppLoader';
import { save } from './src/database/write';

// Keep the splash screen visible while we fetch resources (there is a promise we can use then and catch)
SplashScreen.preventAutoHideAsync()
  .then((prevented) => {
    console.log("Prevented", prevented)
  })
  .catch((error) => {
    console.log('Prevent error:', error)
  });

// Tab Navigation
const Tab = createBottomTabNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [posts, setPosts] = useState([]);
  const [review, setReviews] = useState([])
  useEffect(() => {
    // TODO add database

    // to hide splash screen
    SplashScreen.hideAsync()
      .then((hidden) => {
        console.log("hidden", hidden)
      })
      .catch((error) => {
        console.log("Hide error", error)
      });
  }, [])



  useEffect(() => {

    const services = [
      {
        id: uuid(),
        title: "Hair highlighting",
        description: "The purpose of highlighting is to add depth, dimension, and a sun-kissed look to the hair.",
        image: "image1.png",
        price: "$250",
        review: "",
        liked: ""
      },
      {
        id: uuid(),
        title: "Keratin straightening,",
        description: "The purpose of highlighting is to add depth, dimension, and a sun-kissed look to the hair.",
        image: "image2.png",
        price: "$230",
        review: "",
        liked: ""
      },
      {
        id: uuid(),
        title: "Hair highlighting",
        description: "The purpose of highlighting is to add depth, dimension, and a sun-kissed look to the hair.",
        image: "image3.png",
        price: "$250",
        review: "",
        liked: ""
      },
      {
        id: uuid(),
        title: "Hair highlighting",
        description: "The purpose of highlighting is to add depth, dimension, and a sun-kissed look to the hair.",
        image: "image4.png",
        price: "$250",
        review: "",
        liked: ""
      }
    ]

    setPosts(services)
  }, [])



  const handleSubmitForm = async (description, liked, postId) => {
    console.log("Does it work")
    try {
      const newForm = {
        description: description,
        liked: liked,

      }
      console.log("Saving new task:", newForm)
      const docId = await save(newForm)
      console.log("Doc Id", docId)

      if (docId) {
        newForm.id = docId

        setReviews(prevReviews => [...prevReviews, newForm])
        console.log("rev", review)
      }


    } catch (error) {
      console.log('Error adding task:', error);
    }
  }

  const handleReviewLoaded = (loadedReview) => {
    setReviews(loadedReview);
    setIsLoading(false)
  }


  const handleNotFound = () => {
    setNotFound(true)
    setIsLoading(false)

  }
  return (
    <>
      <AppLoader onReviewLoaded={handleReviewLoaded} onNotFound={handleNotFound} />
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header />


          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" size={size} color={color} />
                )
              }}
            >
              {(props) => (
                <Services
                  {...props}
                  reviews={review}
                  posts={posts}
                  onAddForm={handleSubmitForm}
                />
              )}
            </Tab.Screen>
            <Tab.Screen name="Reviews"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Fontisto name="favorite" size={size} color={color} />
                )
              }}>
              {(props) => (
                <SavedInfo
                  {...props}
                  reviews={review}
                  onAddForm={handleSubmitForm}
                />
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </NavigationContainer>

    </>

  );
}

