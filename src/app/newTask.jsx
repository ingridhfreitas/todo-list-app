import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useTaskContext } from "../context/TaskContext";

export default function Index() {
  const router = useRouter();
  const { tasks, deleteTask, toggleTaskCompletion } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../task")}
        >
          <Text style={styles.ButtonText}>+ Adicionar tarefa</Text>
        </TouchableOpacity>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, item.completed && styles.completedCard]}>
              <View style={styles.taskRow}>
                <TouchableOpacity
                  onPress={() => toggleTaskCompletion(item.id)}
                  style={styles.checkbox}
                >
                  <MaterialIcons
                    name={
                      item.completed ? "check-box" : "check-box-outline-blank"
                    }
                    size={24}
                    color="#9e78cf"
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.textCardList,
                    item.completed && styles.completedText,
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={24}
                  color="#9e78cf"
                />
              </TouchableOpacity>
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
    padding: 15,
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

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    marginRight: 10,
  },
  completedCard: {
    opacity: 0.7,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
});
