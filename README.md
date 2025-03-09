# KeyPass API

Este é um sistema de autenticação simples utilizando **Node.js**, **JWT (JSON Web Tokens)**, **MongoDB** e **Express**. O sistema permite a criação de novas tarefas, login, e a geração de tokens JWT para autenticação de usuários em endpoints protegidos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js, utilizado para criação de rotas e gerenciamento de requisições HTTP.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados dos usuários.
- **JWT (JSON Web Tokens)**: Protocolo de autenticação e autorização baseado em tokens.

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/beeleza/KeyPass-Api.git
cd KeyPass-Api
npm install
``` 

## Endpoints

### 1. `POST` /api/auth/register

- Exemplo da requisição

```json
{
    "name": "user",
    "email": "user@example.com",
    "password": "pass123"
}
```

- Exemplo da resposta

```json
{
    "msg": "Usuário registrado com sucesso!"
}
```

### 2. `POST` /api/auth/login

- Exemplo da requisição

```json
{
    "email": "user@example.com",
    "password": "pass123"
}
```

- Exemplo da resposta

```json
{
    "token": "your_token"
}
```

### 3. `GET` /api/user/profile

- Exemplo da resposta

```json
{
    "msg": "Informações sensiveis",
    "user": {
        "id": "user_id"
    }
}
```
