import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export function ButtonHeaderLogOut({ name, onPres, navigation }) {
  const logOut = () => {
    console.log("Logout");
    navigation.navigate("Login");
  };
  return (
    <>
      <TouchableOpacity style={style.button} onPress={logOut}>
        <Feather name="log-out" size={24} color="#bebebe" />
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

export default ButtonHeaderLogOut;
