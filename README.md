# 📚 Bookstore API

A RESTful API built with **NestJS** and **MongoDB** to manage user authentication and books, featuring JWT-based authorization and Swagger documentation.

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
