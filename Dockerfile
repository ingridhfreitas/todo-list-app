FROM node:23-alpine3.19 AS BASE

WORKDIR /todo-list-app

RUN npm install -g expo-cli

COPY package*.json ./

# Instalação de dependências
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]