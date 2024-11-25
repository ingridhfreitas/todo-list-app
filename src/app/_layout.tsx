import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

export default function Layout() {
  const router = useRouter();
  return (
    <TaskProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0d0714",
          },
          headerTintColor: "#9e78cf",
          headerTitleStyle: {
            color: "#ffffff",
          },
          contentStyle: {
            backgroundColor: "#0d0714",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Minhas Tarefas",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="newTask"
          options={{
            title: "Nova Tarefa",
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => router.back()}
                style={{ marginLeft: 8 }}
              >
                <ChevronLeft size={24} color="#9e78cf" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </TaskProvider>
  );
}
