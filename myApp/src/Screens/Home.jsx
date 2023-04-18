import { StyleSheet, View, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { ProfileScreen, PostsScreen, CreatePostsScreen } from ".";
import { ButtonHeaderLogOut } from "../Components/Button";
import { getHeaderTitle } from "../helpers";

const Tabs = createBottomTabNavigator();

export function Home({ navigation }) {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "PostsScreen") {
            return <Feather name="grid" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return <Feather name="user" size={size} color={color} />;
          } else if (route.name === "CreatePostsScreen") {
            return (
              <View style={style.buttonAddPost}>
                <Feather name="plus" size={size} color={"#fff"} />
              </View>
            );
          }
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          title: "Публікації",
          headerTitleStyle: {
            alignContent: "center",
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerTitleAlign: "center",
          headerRight: () => <ButtonHeaderLogOut navigation={navigation} />,
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          title: "Створити публікацію",
          headerTitleStyle: {
            alignContent: "center",
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerTitleAlign: "center",
          headerRight: () => <ButtonHeaderLogOut navigation={navigation} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          title: "Профіль",
          headerTitleStyle: {
            alignContent: "center",
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerTitleAlign: "center",
          headerRight: () => <ButtonHeaderLogOut navigation={navigation} />,
        }}
      />
    </Tabs.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  buttonAddPost: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export default Home;
