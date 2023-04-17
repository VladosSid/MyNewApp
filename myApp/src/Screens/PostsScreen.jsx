import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import { PostsList } from "../Components/Posts";

const data = [
  {
    id: "123",
    name: "Ліс",
    photo: "require('../../../img/testImgPosts/Rectangle_23.jpg')",
    locate: "Ivano-Frankivs'k Region, Ukraine",
    comments: 0,
  },
  {
    id: "124",
    name: "Закат на Черном море",
    photo: "require('../../../img/testImgPosts/Rectangle_24.jpg')",
    locate: "Ukraine",
    comments: 1,
  },
  {
    id: "125",
    name: "Старый домик в Венеции",
    photo: "require('../../../img/testImgPosts/Rectangle_25.jpg')",
    locate: "Italy",
    comments: 6,
  },
];

export function ProfileScreen() {
  const [posts, setPosts] = useState(data);

  return (
    <SafeAreaView style={style.container}>
      {/* <View style={style.containerUser}>
        <View style={style.imageUserContainer}>
          <Image
            source={require("../../img/UserProfile/Rectangle_22.jpg")}
          ></Image>
        </View>
        <View>
          <Text style={style.nameUser}>Name user</Text>
          <Text style={style.emailUser}>Email User</Text>
        </View>
      </View> */}
      <View style={{ marginTop: 32 }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostsList list={item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },

  containerUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageUserContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  nameUser: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#212121",
  },
  emailUser: {
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 13,

    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default ProfileScreen;
