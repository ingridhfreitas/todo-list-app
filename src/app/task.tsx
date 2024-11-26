import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useTaskContext } from "../context/TaskContext";
import { useRouter, Stack } from "expo-router";

type Priority = "baixa" | "média" | "alta";

interface Task {
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
}

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [priority, setPriority] = useState<Priority>("média");

  const { addTask } = useTaskContext();
  const router = useRouter();

  const handleAddTask = () => {
    if (!title.trim()) {
      Alert.alert("Erro", "Por favor, insira um título para a tarefa");
      return;
    }

    const newTask: Task = {
      title: title.trim(),
      description: description.trim(),
      dueDate,
      priority,
      completed: false,
    };

    try {
      addTask(newTask);
      router.push("../newTask");
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível adicionar a tarefa. Tente novamente."
      );
    }
  };

  const onChangeDueDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDueDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("pt-BR");
  };

  const renderDatePicker = () => {
    if (Platform.OS === "android") {
      return (
        showDatePicker && (
          <DateTimePicker
            value={dueDate}
            mode="date"
            display="default"
            onChange={onChangeDueDate}
            minimumDate={new Date()}
          />
        )
      );
    }

    return (
      showDatePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="spinner"
          onChange={onChangeDueDate}
          minimumDate={new Date()}
        />
      )
    );
  };

  const priorityLevels: Priority[] = ["baixa", "média", "alta"];

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0d0714" },
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Nova Tarefa</Text>

          <TextInput
            style={styles.input}
            placeholder="Título da Tarefa"
            placeholderTextColor="#9e78cf"
            value={title}
            onChangeText={setTitle}
            maxLength={50}
          />

          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Descrição (opcional)"
            placeholderTextColor="#9e78cf"
            multiline
            value={description}
            onChangeText={setDescription}
            maxLength={200}
          />

          <View style={styles.dateContainer}>
            <Text style={styles.label}>Data de Conclusão:</Text>
            <TouchableOpacity
              onPress={showDatepicker}
              style={[styles.input, styles.dateButton]}
            >
              <Text style={styles.dateButtonText}>{formatDate(dueDate)}</Text>
            </TouchableOpacity>

            {renderDatePicker()}
          </View>

          <View style={styles.priorityContainer}>
            <Text style={styles.label}>Prioridade:</Text>
            <View style={styles.priorityButtonsContainer}>
              {priorityLevels.map((priorityLevel) => (
                <TouchableOpacity
                  key={priorityLevel}
                  style={[
                    styles.priorityButton,
                    priority === priorityLevel && styles.selectedPriority,
                  ]}
                  onPress={() => setPriority(priorityLevel)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.priorityButtonText,
                      priority === priorityLevel && styles.selectedPriorityText,
                    ]}
                  >
                    {priorityLevel.charAt(0).toUpperCase() +
                      priorityLevel.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleAddTask}
            activeOpacity={0.7}
          >
            <Text style={styles.saveButtonText}>Salvar Tarefa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: "#9e78cf",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1d1825",
    color: "#ffffff",
    borderColor: "#9e78cf",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
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
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  dateButton: {
    justifyContent: "center",
  },
  dateButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  priorityContainer: {
    marginBottom: 20,
  },
  priorityButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priorityButton: {
    backgroundColor: "#15101c",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#9e78cf",
  },
  selectedPriority: {
    backgroundColor: "#9e78cf",
  },
  priorityButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
  selectedPriorityText: {
    color: "#15101c",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#9e78cf",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  saveButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#9e78cf",
    borderWidth: 1,
    marginBottom: 15,
  },
  backButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
