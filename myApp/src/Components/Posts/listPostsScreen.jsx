import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { EvilIcons } from "@expo/vector-icons";

export const PostsList = ({ list }) => {
  return (
    <View style={{ marginBottom: 34 }}>
      <View>
        <Image
          style={style.imagePost}
          source={require("../../../img/testImgPosts/Rectangle_24.jpg")}
        />
      </View>
      <Text style={style.postName}>{list.name}</Text>

      <View style={style.containerComments}>
        <TouchableOpacity
          onPress={() => console.log("click")}
          style={style.containerSecondary}
        >
          <EvilIcons name="comment" size={22} color="#FF6C00" />
          <Text style={(style.textStyle, { color: "#FF6C00" })}>
            {list.comments}
          </Text>
        </TouchableOpacity>

        <View style={style.containerSecondary}>
          <EvilIcons name="location" size={22} color="#FF6C00" />
          <Text
            style={
              (style.textStyle,
              {
                color: "#212121",
                textDecorationLine: "underline",
              })
            }
          >
            {list.locate}
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  imagePost: {
    width: "100%",
    borderRadius: 8,
  },
  postName: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,

    color: " #212121",
  },

  containerComments: {
    marginTop: 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  containerSecondary: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
  },
});

export default PostsList;
