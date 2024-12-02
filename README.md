# 📋 To-Do List App 

Este projeto é um aplicativo de lista de tarefas desenvolvido em **React Native**, como parte da disciplina de **Dispositivos Móveis (2024.2)**. O objetivo do app é ajudar na organização e gerenciamento de atividades diárias de forma prática e intuitiva.

---

## 🎯 **Objetivo do Projeto**

O aplicativo permite que os usuários criem, editem e organizem suas tarefas em um só lugar, com uma interface simples e fluida, focada na produtividade.

---

## 💻 **Funcionalidades**

- **Adicionar novas tarefas:** Crie tarefas rapidamente para gerenciar seu dia.
- **Editar tarefas existentes:** Atualize informações de uma tarefa sempre que necessário.
- **Excluir tarefas:** Remova tarefas concluídas ou não desejadas.
- **Navegação simples:** Utiliza botões e ícones para facilitar o uso.
- **Interface responsiva e moderna:** Com foco em acessibilidade e design clean.

---

## 🛠 **Tecnologias Utilizadas**

- **React Native**: Framework principal para desenvolvimento.
- **Expo Router**: Gerenciamento de rotas e navegação entre telas.
- **Context API**: Gerenciamento global de estado para adicionar, editar e excluir tarefas.
- **Docker**: Para containerização do projeto.

---

## 📂 **Arquitetura do Projeto**

```plaintext
📦 app/
 ┣ 📂 images/
 ┃ ┗ 🖼 img.png
 ┣ 📜 _layout.tsx
 ┣ 📜 index.tsx
 ┣ 📜 newTask.tsx
 ┣ 📜 task.tsx
 ┃ ┗ TaskContext.tsx
```

### **Componentes principais:**

1. **InitialScreen.tsx**: Tela de boas-vindas com um botão que leva à criação de tarefas.
2. **Layout.tsx**: Gerencia a navegação e o layout das telas, com um botão de retorno customizado.
3. **TaskContext.tsx**: Contexto que gerencia o estado global das tarefas, permitindo a adição, edição e exclusão.

---

## 🎨 **Estilo e Navegação**

- **Cores predominantes:** Roxo escuro e lilás, criando um visual moderno e elegante.
- **Botão de navegação:** Ícone de retorno personalizado usando **Lucide-react-native**.
- **Tela de edição:** Interface intuitiva para modificar tarefas.

---

## 🚀 **Como Executar o Projeto**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```
## 🐳 **Como Executar o Container**

Pré-requisitos: Docker instalado.

Após clonar o repositório, execute o comando:
docker build -t todo-list-app .
docker run -p 8081:8081 todo-list-app

A porta principal do container é a 8081.

❗Importante!

As portas 8081, 19000, 19001 e 19002 são expostas para acesso no Dockerfile, mas recomendamos usar a 8081.
Utilizamos Node.js 20 com Alpine Linux, por se tratar de uma versão mais recente e leve.
Todas as dependências são instaladas automaticamente durante a construção do container
---

## 📚 **Sobre a Disciplina**

Este projeto foi desenvolvido como parte da disciplina de **Dispositivos Móveis (2024.2)**, focada no desenvolvimento de aplicativos móveis utilizando **React Native**, com práticas modernas de navegação e gerenciamento de estado.
