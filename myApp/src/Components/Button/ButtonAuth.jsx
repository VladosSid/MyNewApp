import { StyleSheet, TouchableOpacity, Text } from "react-native";

import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regulat": require("../../../img/Fonts/Robot/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../img/Fonts/Robot/Roboto-Medium.ttf"),
  });
};

loadFonts();

export function ButtonAuth({ name, onSubmit, navigation }) {
  const onPress = () => {
    onSubmit();
    navigation.navigate("Home");
  };
  return (
    <>
      <TouchableOpacity onPress={onPress} style={style.button}>
        <Text style={style.text}>{name}</Text>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#FF6C00",

    borderRadius: 100,

    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,

    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default ButtonAuth;
