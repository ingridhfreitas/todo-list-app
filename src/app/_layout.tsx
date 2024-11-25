import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

const Layout = () => {
  const router = useRouter();

  const screenOptions = {
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
  };

  const BackButton = () => (
    <TouchableOpacity 
      onPress={() => router.back()}
      style={{ 
        marginLeft: 8,
        padding: 4  // Área de toque maior para melhor usabilidade
      }}
    >
      <ChevronLeft size={24} color="#9e78cf" />
    </TouchableOpacity>
  );

  return (
    <TaskProvider>
      <Stack screenOptions={screenOptions}>
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
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack>
    </TaskProvider>
  );
};

export default Layout;