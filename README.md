![Interface do Sistema](./Screen.png)

# 📌 Lista de tarefas

Gerencie suas tarefas de forma simples e eficiente com este sistema. Este projeto é composto por um frontend desenvolvido em React (NextJS) e um backend baseado em Node.js (AdonisJS).

---

## 🚀 **Funcionalidades**

### **Frontend**

- Interface limpa e responsiva
- Criação, leitura, atualização e exclusão de tarefas.
- Favoritos.
- Personalização de cores das tarefas.
- Filtragem por Titulo e core das tarefas.

### **Backend**

- API RESTful para gerenciamento das Tarefas.
- Suporte a operações de CRUD.

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**

- **NextJs**
- **Tailwind CSS** para estilização.
- **Shadcn** para componentes.
- **React Hook Form & Zod** para formulários.
- **Axios** para consumo da API.
- **Zustand** para gerenciamento de Estados.
- **Typescript** para Tipagem.

### **Backend**

- **Node.js** com **AdonisJs**.
- **MYSQL** para banco de dados.

## ⚙️ **Pré-requisitos**

Certifique-se de ter instalado:

- **Node.js** >=22.x
- **PNPM** ou **NPM**.

## 🛠️ **Como Configurar o Projeto**

### **Backend**

1. Clone o repositório:

```bash
   git clone https://github.com/EvandroEusebio/corelab_manage_todoList.git
   cd todo-back
```

2. Instale as dependencias

```bash
   npm install ou pnpm install
```

3. crie o arquivo .env e adicione o seguinte script:

```bash
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=QtAoffIUzMn2iQTAWo7p19R5AZTSPGOq
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=3306 // Adicione a porta do seu Banco de Dados
DB_USER=root // Adicione o usuário do seu banco
DB_PASSWORD=SUA_SENHA // Adicione a senha do seu banco de dados
DB_DATABASE=NOME_DO_BANCO // Adicione o nome do seu Banco de dados
```

4. Execute as migrações do banco

```bash
node ace migration:run
```

5. Inicie o servidor

```bash
npm run dev ou pnpm run dev
```

### **Frontend**

1. Clone o repositório:

```bash
   git clone https://github.com/EvandroEusebio/corelab_manage_todoList.git
   cd /todo-front
```

2. Instale as dependencias

```bash
   pnpm i
   ou
   npm install
```

3. Acesse o arquivo src/service/api.ts e configure:

```bash
   const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Insira sua url do local
  headers: {
    "Content-Type": "application/json",
  },
});
```

4. Inicie o projeto:

```bash
   pnpm run dev
```

🧪 Como Usar

- **Acesse o Frontend: Ex. http://localhost:5173.**
- **Gerencie suas Tarefas no painel.**

📖 Rotas da API

- **GET /api/todo/** Obter as Tarefas.
- **POST /api/todo/create** Criar um Tarefa.
- **PUT /api/todo/edit/{id}** Editar uma tarefa.
- **DELETE /api/todo/delete/{id}** Deletar uma tarefa.

📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

📧 Contato

- **Email: ** eusebioevandro01@gmail.com
- **GitHub: ** https://github.com/EvandroEusebio
- **Linkedin: ** https://www.linkedin.com/in/evandro-eus%C3%A9bio-121a5a26a/
