import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

export default function Index() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([""]);

  function addTotask() {
    setListTask([...listTask, task]);
  }

  function removeFromTask(index: any) {
    setListTask(listTask.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <TextInput
            onChangeText={setTask}
            style={styles.input}
            placeholder="Adicionar tarefa..."
            placeholderTextColor="#FFF"
          />
          <TouchableOpacity onPress={addTotask} style={styles.button}>
            <Text style={styles.ButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={listTask}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.textCardList}>{item}</Text>
              <View style={styles.iconCardList}>
                <MaterialIcons name="done" size={24} color="#9e78cf" />
                <TouchableOpacity onPress={() => removeFromTask(index)}>
                  <MaterialIcons
                    name="delete-outline"
                    size={24}
                    color="#9e78cf"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "#0d0714",
  },

  content: {
    backgroundColor: "#1d1825",
    flex: 1,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    gap: 25,
    elevation: 5,
  },

  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 15,
  },

  ButtonText: {
    color: "#FFFFFF",
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9e78cf",
    color: "#ffffff",
  },

  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#9e78cf",
  },

  textCardList: {
    color: "#9e78cf",
  },

  card: {
    padding: 10,
    backgroundColor: "#15101c",
    borderRadius: 10,
    flexDirection: "row",
    gap: 25,
    elevation: 5,
    marginVertical: 10,
    justifyContent: "space-between",
  },

  iconCardList: {
    flexDirection: "row",
    gap: 5,
  },
});
