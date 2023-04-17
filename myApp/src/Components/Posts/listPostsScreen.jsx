import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

export const PostsList = ({ list }) => {
  return (
    <View>
      <View>
        <Image source={require("../../../img/testImgPosts/Rectangle_24.jpg")} />
      </View>
      <Text>{list.name}</Text>
      <View>
        <View>
          <EvilIcons name="comment" size={24} color="black" />
          <Text>{list.comments}</Text>
        </View>
        <View>
          <EvilIcons name="location" size={24} color="black" />
          <Text>{list.locate}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsList;
