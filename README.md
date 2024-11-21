
# Gerenciador de Tarefas 📋

Este projeto é um aplicativo de gerenciamento de tarefas desenvolvido em **React Native** durante a disciplina de **Dispositivos Móveis** no semestre 2024.2. O aplicativo permite adicionar, marcar como concluídas e excluir tarefas.

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas rapidamente.
- **Marcar como Concluída:** Atualize o status de uma tarefa.
- **Excluir Tarefas:** Remova tarefas desnecessárias.
- **Interface Simples e Intuitiva:** Design minimalista com navegação prática.

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo Router**: Gerenciamento de rotas no aplicativo.
- **Context API**: Gerenciamento de estado global.
- **Expo Vector Icons**: Ícones para aprimorar a interface.

## 📂 Estrutura do Projeto

```plaintext
/
├── context/
│   └── TaskContext.js   # Gerenciamento do estado global das tarefas
├── pages/
│   ├── Index.js         # Tela principal de exibição de tarefas
│   └── NewTask.js       # Tela para adicionar novas tarefas
└── App.js               # Arquivo principal do aplicativo
```

## 🖼️ Prévia

A tela principal exibe uma lista de tarefas com opções para:
- Marcar tarefas como concluídas (ícone de checkbox).
- Excluir tarefas (ícone de lixeira).
- Adicionar novas tarefas por meio de um botão.

## 📦 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npx expo start
   ```
