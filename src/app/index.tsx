import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function InitialScreen() {
  const router = useRouter();

  const handleStartPress = () => {
    router.push("../newTask");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../app/images/img.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.welcomeText}>
          Organize suas ideias, conquiste seus objetivos: suas tarefas, todas em
          um só lugar!
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleStartPress}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    color: "#9e78cf",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#9e78cf",
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
