import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function Layout() {
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
          }}
        />
        <Stack.Screen
          name="newTask"
          options={{
            title: "Nova Tarefa",
          }}
        />
      </Stack>
    </TaskProvider>
  );
}
