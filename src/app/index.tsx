import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable
} from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <TextInput />
          <TouchableOpacity>
            <Text>++++++</Text>
            <Pressable>
              <Link href={"/newTask"}>Link para nova tarefa</Link>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a283c6",
  },

  content: {
    backgroundColor: "",
    flex: 1,
    width: "100%",
    borderRadius: 20,
  },
  contentHeader: {},
});
