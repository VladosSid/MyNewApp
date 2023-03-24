import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { ProfileScreen, PostsScreen, CreatePostsScreen } from "../Screens";
import { getHeaderTitle } from "../helpers";

const Tabs = createBottomTabNavigator();

export function Home() {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Profile") {
            return <Feather name="user" size={size} color={color} />;
          } else if (route.name === "PostsScreen") {
            return <Feather name="grid" size={size} color={color} />;
          } else if (route.name === "CreatePostsScreen") {
            return (
              <View style={style.buttonAddPost}>
                <Feather name="plus" size={size} color={"#fff"} />
              </View>
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "#212121",
      }}
    >
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarShowLabel: false }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{ tabBarShowLabel: false }}
      />

      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ tabBarShowLabel: false }}
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
