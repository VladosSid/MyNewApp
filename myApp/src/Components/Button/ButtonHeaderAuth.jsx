import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export function ButtonHeaderAuth({ name, onPres, navigation }) {
  return (
    <>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={style.text}>{name}</Text>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#fff",

    borderRadius: 100,

    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 24,

    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  text: {
    color: "#FF6C00",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default ButtonHeaderAuth;
