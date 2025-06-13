# 🔥 Trabalho A3 - Sistemas Distribuidos e Mobile

Este projeto é uma API RESTful construída com Node.js, Express e Firebase Firestore.  
Ela oferece funcionalidades completas de **CRUD para categorias e produtos**, com conexão direta ao Firestore, sem o uso de variáveis de ambiente.

---

## ✅ Requisitos

- Node.js instalado (versão 16 ou superior)
- Conta no Firebase com Firestore já ativado
- Postman ou Insomnia para testar as rotas

---

## 🚀 Como rodar o projeto

1. **Clone ou copie o projeto:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd nome-do-projeto
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o Firebase**

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

4. **Inicie o servidor:**

```bash
"npm run dev" ou "npm start"
```

> A API estará disponível em:  
> `http://localhost:3000`

---

## 📂 Estrutura de Arquivos

```
│   ├──  bin/
│   │   ├── www
│   ├── controllers/
│   │   ├── categoryController.js
│   │   └── productController.js
│   ├── public/
│   │   ├── stylesheets/
│   │       ├── style.css
│   │   └── index.html
│   ├── routes/
│   │   ├── categoryRoutes.js
│   │   └── index.js
│   │   └── productRoutes.js
│   ├── services/
│   │   └── firebaseApp.js
│   │   └── firestore.js
│   │   └── index.js
│── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📬 Rotas da API

### 🗂 Categorias

- **Criar categoria**  
  `POST /api/categories`

```content-type │ aplication/json
{
  "nome": "Livros",
  "descricao": "Categoria de livros"
}
```

- **Listar categorias**  
  `GET /api/categories`

- **Atualizar categoria**  
  `PUT /api/categories/:id`

```content-type │ aplication/json
{
  "nome": "Atualizado",
  "descricao": "Descrição nova"
}
```

- **Deletar categoria**  
  `DELETE /api/categories/:id`

---

### 📦 Produtos

- **Criar produto**  
  `POST /api/products`

```content-type │ aplication/json
{
  "nome": "Notebook",
  "preco": 4200
}
```

- **Listar produtos**  
  `GET /api/products`

- **Atualizar produto**  
  `PUT /api/products/:id`

```content-type │ aplication/json
{
  "nome": "Notebook Gamer",
  "preco": 5000
}
```

- **Deletar produto**  
  `DELETE /api/products/:id`

---

## 🧪 Testes

Você pode testar todas as rotas usando o [Postman](https://www.postman.com/) ou qualquer outro cliente REST. Certifique-se de enviar o corpo das requisições em **JSON** e usar os métodos HTTP corretos (GET, POST, PUT, DELETE).

---

## 📌 Observações

- O projeto **não usa variáveis de ambiente (.env)**, pois a configuração do Firebase está diretamente no arquivo `firebaseApp.js`.
- As operações com Firestore utilizam as funções oficiais da biblioteca `firebase/firestore`, como `setDoc`, `getDocs`, `updateDoc` e `deleteDoc`.

---

Projeto feito usando Node.js, Express e Firebase
Christhopper Marques Ferreira - RA: 1292312696
