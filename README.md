# API Gerenciador de Tarefas

API RESTful para gerenciamento de tarefas (To-Do List) desenvolvida como requisito acadêmico.

## 🚀 Tecnologias
- Node.js + Express
- Supabase (PostgreSQL + Auth)
- Deploy: Render

## 🔗 Link da API Online
Base URL: `https://dashboard.render.com/web/srv-d4hgsnadbo4c73bfcqkg`

## 📝 Endpoints

| Método | Rota | Descrição | Exemplo JSON (Body) |
|---|---|---|---|
| GET | /tasks | Lista todas as tarefas | - |
| GET | /tasks/:id | Busca tarefa por ID | - |
| POST | /tasks | Cria nova tarefa | `{"title": "Estudar API", "description": "Node e Express"}` |
| PUT | /tasks/:id | Atualiza tarefa | `{"completed": true}` |
| DELETE| /tasks/:id | Remove tarefa | - |

## 💻 Como rodar localmente

1. Clone o repositório.
2. Instale dependências: `npm install`.
3. Crie um arquivo `.env` com as chaves `SUPABASE_URL` e `SUPABASE_KEY`.
4. Rode `npm run dev`.