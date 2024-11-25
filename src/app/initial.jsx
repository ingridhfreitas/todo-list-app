import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function InitialScreen() {
  const router = useRouter();

  const handleStartPress = () => {
    // Navegue para a próxima tela (no seu caso, provavelmente a tela de tarefas)
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Imagem no centro */}
        <Image
          source={require("../app/images/img.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Texto explicativo */}
        <Text style={styles.welcomeText}>
          Bem-vindo ao seu Organizador de Tarefas
        </Text>

        {/* Botão de iniciar */}
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
