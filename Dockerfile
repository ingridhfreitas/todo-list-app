FROM node:20-alpine3.19 AS base

WORKDIR /todo-list-app

COPY package*.json ./

# Instalação de dependências e versões atualizadas do expo
RUN npm install --legacy-peer-deps && \
    npx expo install expo-linking@~7.0.3 \
    expo-router@~4.0.9 \
    expo-splash-screen@~0.29.13 \
    expo-system-ui@~4.0.4 \
    react-native@0.76.3

COPY . .

# Configuração do Expo para rodar no container
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
ENV REACT_NATIVE_PACKAGER_HOSTNAME=localhost
ENV WATCHPACK_POLLING=true

# Exposição das portas utilizadas pelo Expo
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 8081

# Inicialização do Expo
CMD ["sh", "-c", "npx expo start --tunnel --web"]
