# Trabalho A3 - Sistemas Distribuidos e Mobile

Este é um projeto Node.js + Express que implementa um CRUD completo para **produtos** e **categorias**, utilizando o **Firebase Firestore** como banco de dados.

---

## 🧰 Tecnologias utilizadas

- Node.js
- Express
- Firebase Firestore (Firebase SDK)
- JavaScript (ES Modules)

---

## 📁 Estrutura do Projeto

```
projeto-firebase-crud/
├── controllers/
│   ├── categoryController.js
│   └── productController.js
├── routes/
│   ├── categoryRoutes.js
│   └── productRoutes.js
├── services/
│   └── firestore.js
├── firebaseApp.js
├── app.js (ou index.js)
├── package.json
└── README.md
```

---

## 🔧 Como rodar o projeto em outra máquina

### 1. Clone ou copie o projeto

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

Ou copie o `.zip` e extraia.

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure o Firebase

No arquivo `firebaseApp.js`, substitua o objeto `firebaseConfig` pelos dados do seu projeto no [console do Firebase](https://console.firebase.google.com/):

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "1:XXXXXXXXX:web:XXXXXXXXXX"
};
```

---

### 4. Inicie o servidor

```bash
npm start
```

Ou, se estiver usando `nodemon` para desenvolvimento:

```bash
npm run dev
```

O servidor iniciará normalmente em:

```
http://localhost:3000
```

---

## 📡 Endpoints da API

### 🛒 Produtos

- `GET    /api/products` – Listar todos os produtos
- `POST   /api/products` – Criar novo produto
- `PUT    /api/products/:id` – Atualizar produto pelo ID
- `DELETE /api/products/:id` – Deletar produto pelo ID

#### Corpo para criação/atualização de produto:

```json
{
  "nome": "Produto X",
  "preco": 99.99
}
```

---

### 🗂️ Categorias

- `GET    /api/categories` – Listar todas as categorias
- `POST   /api/categories` – Criar nova categoria
- `PUT    /api/categories/:id` – Atualizar categoria pelo ID
- `DELETE /api/categories/:id` – Deletar categoria pelo ID

#### Corpo para criação/atualização de categoria:

```json
{
  "nome": "Categoria X",
  "descricao": "Descrição da categoria"
}
```

---

## ✅ Requisitos para rodar

- Node.js (v18+)
- Conta no Firebase com um projeto criado
- Firestore ativado no modo **test** (sem regras de autenticação)

---

## 📬 Dúvidas

Se tiver alguma dúvida, fale com o autor do projeto ou envie um e-mail ao professor responsável.

---
