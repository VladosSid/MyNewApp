import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export function ProfileScreen() {
  return (
    <View style={style.container}>
      <View style={style.containerUser}>
        <View style={style.imageUserContainer}>
          <Image
            source={require("../../img/UserProfile/Rectangle_22.jpg")}
          ></Image>
        </View>
        <View>
          <Text>Name user</Text>
          <Text>Email User</Text>
        </View>
      </View>
      <View></View>
    </View>
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

    // justifyContent: "center",
  },
  imageUserContainer: {
    // backgroundColor: "#000",
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
});

export default ProfileScreen;
