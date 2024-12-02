import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useTaskContext } from "../context/TaskContext";
import DateTimePicker from '@react-native-community/datetimepicker';

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  priority: "baixa" | "média" | "alta";
  completed: boolean;
}

export default function Index() {
  const router = useRouter();
  const { tasks, deleteTask, toggleTaskCompletion, updateTask } =
    useTaskContext();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedDescription, setEditedDescription] = useState<string>("");
  const [editedDueDate, setEditedDueDate] = useState<Date | undefined>(undefined);
  const [editedPriority, setEditedPriority] = useState<Task['priority']>("baixa");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setEditedTitle(task.title);
    setEditedDescription(task.description || "");
    setEditedDueDate(task.dueDate);
    setEditedPriority(task.priority);
    setIsModalVisible(true);
  };

  const saveEditedTask = () => {
    if (editingTask && editedTitle.trim()) {
      updateTask(editingTask.id, {
        title: editedTitle.trim(),
        description: editedDescription.trim(),
        dueDate: editedDueDate,
        priority: editedPriority,
      });
      setIsModalVisible(false);
      setEditingTask(null);
      resetForm();
    }
  };

  const resetForm = () => {
    setEditedTitle("");
    setEditedDescription("");
    setEditedDueDate(undefined);
    setEditedPriority("baixa");
  };

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
              <View style={styles.iconCardList}>
                <TouchableOpacity onPress={() => openEditModal(item)}>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={24}
                    color="#9e78cf"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={24}
                    color="#9e78cf"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Nenhuma tarefa encontrada</Text>
          )}
        />
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Tarefa</Text>
            <TextInput
              style={styles.input}
              placeholder="Título da tarefa"
              placeholderTextColor="#9e78cf"
              value={editedTitle}
              onChangeText={setEditedTitle}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Descrição"
              placeholderTextColor="#9e78cf"
              value={editedDescription}
              onChangeText={setEditedDescription}
              multiline
              numberOfLines={3}
            />
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateButtonText}>
                {editedDueDate 
                  ? editedDueDate.toLocaleDateString()
                  : "Selecionar Data"}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={editedDueDate || new Date()}
                mode="date"
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (date) setEditedDueDate(date);
                }}
              />
            )}
            <View style={styles.priorityContainer}>
              {["baixa", "média", "alta"].map((priority) => (
                <TouchableOpacity
                  key={priority}
                  style={[
                    styles.priorityButton,
                    editedPriority === priority && styles.selectedPriority,
                  ]}
                  onPress={() => setEditedPriority(priority as Task['priority'])}
                >
                  <Text style={styles.priorityText}>{priority}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={saveEditedTask}
              >
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  button: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#9e78cf",
  },
  ButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
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
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    marginRight: 10,
  },
  iconCardList: {
    flexDirection: "row",
    gap: 5,
  },
  textCardList: {
    color: "#9e78cf",
    flex: 1,
  },
  completedCard: {
    opacity: 0.7,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9e78cf",
    color: "#ffffff",
    marginBottom: 15,
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "#1d1825",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    color: "#9e78cf",
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#9e78cf",
  },
  cancelButton: {
    backgroundColor: "#ff4500",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  emptyListText: {
    color: "#9e78cf",
    textAlign: "center",
    marginTop: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
    minHeight: 100,
    maxHeight: 100,
  },
  dateButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9e78cf",
    padding: 10,
    marginBottom: 15,
  },
  dateButtonText: {
    color: "#9e78cf",
  },
  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  priorityButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9e78cf",
    marginHorizontal: 5,
    alignItems: "center",
  },
  selectedPriority: {
    backgroundColor: "#9e78cf",
  },
  priorityText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
