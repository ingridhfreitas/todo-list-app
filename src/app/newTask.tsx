import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTaskContext } from "../context/TaskContext";
import { useRouter } from "expo-router";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [priority, setPriority] = useState<"baixa" | "média" | "alta">("média");

  const { addTask } = useTaskContext();
  const router = useRouter();

  const handleAddTask = () => {
    if (!title.trim()) {
      alert("Por favor, insira um título para a tarefa");
      return;
    }

    addTask({
      title,
      description,
      dueDate,
      priority,
      completed: false,
    });

    router.push("/");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nova Tarefa</Text>

        <TextInput
          style={styles.input}
          placeholder="Título da Tarefa"
          placeholderTextColor="#9e78cf"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Descrição (opcional)"
          placeholderTextColor="#9e78cf"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.dateContainer}>
          <Text style={styles.label}>Data de Conclusão:</Text>
          <DateTimePicker
            value={dueDate || new Date()}
            mode="date"
            display="calendar"
            onChange={(event, selectedDate) => {
              setDueDate(selectedDate);
            }}
          />
        </View>

        <View style={styles.priorityContainer}>
          <Text style={styles.label}>Prioridade:</Text>
          {(["baixa", "média", "alta"] as const).map((priorityLevel) => (
            <TouchableOpacity
              key={priorityLevel}
              style={[
                styles.priorityButton,
                priority === priorityLevel && styles.selectedPriority,
              ]}
              onPress={() => setPriority(priorityLevel)}
            >
              <Text style={styles.priorityButtonText}>
                {priorityLevel.charAt(0).toUpperCase() + priorityLevel.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleAddTask}>
          <Text style={styles.saveButtonText}>Salvar Tarefa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0714",
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#9e78cf",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1d1825",
    color: "#ffffff",
    borderColor: "#9e78cf",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  dateContainer: {
    marginBottom: 15,
  },
  label: {
    color: "#9e78cf",
    marginBottom: 5,
  },
  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  priorityButton: {
    backgroundColor: "#15101c",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  selectedPriority: {
    backgroundColor: "#9e78cf",
  },
  priorityButtonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#9e78cf",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
