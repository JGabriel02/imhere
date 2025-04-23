# 👥 ImHere - Lista de Participantes

**ImHere** é um aplicativo desenvolvido com **React Native** que permite gerenciar uma lista de participantes de forma prática.  
Você pode adicionar novos nomes, visualizar quem está presente e remover participantes facilmente com um botão ou gesto de deslizar.

---

---

## 📸 Demonstração

<div align="center">
  <img src="assets/demo/screen1.gif" width="30%" alt="Tela de adição" />
  <img src="assets/demo/screen2.gif" width="30%" alt="Participantes adicionados" />
</div>

---

## ✨ Funcionalidades

- ➕ **Adicionar Participantes**  
  Insira o nome de um participante e adicione-o à lista com apenas um toque.

- 🗑️ **Remover Participantes**  
  - Clique no botão “Remover” para excluir diretamente  
  - Ou deslize para a direita para remover com um gesto intuitivo

- 💾 **Persistência de Dados**  
  A lista é salva localmente no dispositivo usando **AsyncStorage** e recarregada automaticamente ao abrir o app.

---

## 🚀 Tecnologias Utilizadas

- **React Native** – Framework para desenvolvimento de aplicativos móveis
- **TypeScript** – Tipagem estática para mais segurança no código
- **AsyncStorage** – Armazenamento local persistente
- **React Native Gesture Handler** – Suporte a gestos como swipe

---

## 📁 Estrutura do Projeto

```
├── app/                # Páginas e navegação
│   ├── _layout.jsx         # Layout principal
│   ├── +not-found.jsx      # Tela de erro 404
│   └── (tabs)/             # Abas principais
│       ├── _layout.jsx         # Layout das abas
│       ├── index.jsx           # Lista de transações
│       ├── add-transactions.jsx # Adicionar transações
│       └── summary.jsx         # Resumo financeiro
├── components/          # Componentes reutilizáveis
├── constants/           # Constantes do projeto (cores, categorias, etc.)
├── contexts/            # Contexto global para estado compartilhado
├── styles/              # Estilos globais
├── assets/              # Imagens e outros recursos estáticos
├── package.json         # Configurações e dependências do projeto
└──
```
