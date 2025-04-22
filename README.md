# 📚 Bookstore API

A RESTful API built with **NestJS** and **TensorFlow** to manage user authentication and books, featuring JWT-based authorization and Swagger documentation.

---

## 🚀 Setup Instructions

## 1. Create Project Directory

```bash
mkdir bookstore-api
cd bookstore-api
```

## 2. Initialize NestJS App

Install the NestJS CLI globally and create a new project:

```bash
npm i -g @nestjs/cli
nest new .
```

### 3. Install Required Dependencies

Run the following commands to install all necessary packages:

```bash
npm install @nestjs/mongoose mongoose
npm install @nestjs/jwt passport-jwt @nestjs/passport passport
npm install bcryptjs
npm install --save-dev @types/bcryptjs
npm install @nestjs/swagger swagger-ui-express
```

### 4. Directory Structure

Organize your code like this:

```bash
src/
├── main.ts
├── app.module.ts
├── auth/
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   └── user.schema.ts
├── books/
│   ├── books.module.ts
│   ├── books.controller.ts
│   ├── books.service.ts
│   └── book.schema.ts
└── common/
    └── jwt-auth.guard.ts
```

### 5. Run MongoDB Locally

Make sure MongoDB is running. Default connection is:

```bash
mongodb://localhost:27017/bookstore
```
Or replace it in MongooseModule.forRoot(...) in app.module.ts.

### 6. Start Your Server

```bash
npm run start:dev
```
Open Swagger documentation in your browser:
* http://localhost:3000/api/docs


#   🔐 Authentication Workflow

## 1. Signup

- **Method:** `POST`  
- **URL:** `http://localhost:3000/api/auth/signup`  
- **Body → raw → JSON:**

```json
{
  "email": "test@example.com",
  "password": "mypassword123"
}
```

## 2. Login

- **Method:** `POST`  
- **URL:** `http://localhost:3000/api/auth/login`  
- Use the **same body** as in the signup step:

```json
{
  "email": "test@example.com",
  "password": "mypassword123"
}
```

## 3. Use Token in Auth Header

- Click the **Authorization** tab in your API testing tool (like Postman)
- Set the **Type** to: `Bearer Token`
- **Paste the token** copied from the login response into the token field
- Now, your requests to protected routes will be authenticated


# Project Overview
| Step 1 | Step 2 |
|--------|--------|
| ![1](https://github.com/user-attachments/assets/99459f67-b831-43cb-8bde-88d67c0a4b9a) | ![2](https://github.com/user-attachments/assets/22eb2f01-18a5-4364-80cb-6d54b3dd051e) |

| Step 3 | Step 4 |
|--------|--------|
| ![3](https://github.com/user-attachments/assets/e3ac2e32-1726-46eb-a0ed-39ebe088874f) | ![4](https://github.com/user-attachments/assets/0e573ffa-5f7d-4326-80eb-6a35c857801c) |

| Step 5 | Step 6 |
|--------|--------|
| ![5](https://github.com/user-attachments/assets/31453954-7463-46af-a9d7-2bd5fd421d31) | ![6](https://github.com/user-attachments/assets/043a2f98-b559-4dfe-a19e-81255a6ecf15) |

| Step 7 | Step 8 |
|--------|--------|
| ![7](https://github.com/user-attachments/assets/fa8b7b56-9482-43c3-8578-61f37ee536a2) | ![8](https://github.com/user-attachments/assets/908b0306-b437-461a-b836-a1bb8b8636cb) |



<h2>Developer</h2>
<ul>
    <li><a href="https://github.com/Silent18Killer">Kaustabh Shit</a></li>
</ul>

