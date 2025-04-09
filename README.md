1. Create Project Directory
```
mkdir bookstore-api
cd bookstore-api
```

2. Initialize NestJS App
```
npm i -g @nestjs/cli
nest new .
```
When prompted:

*  ✅ Choose npm
*  ✅ Overwrite main.ts, app.module.ts, etc., with the code already provided in the canvas.

3. Install Required Dependencies
```
npm install @nestjs/mongoose mongoose
npm install @nestjs/jwt passport-jwt @nestjs/passport passport
npm install bcryptjs
npm install --save-dev @types/bcryptjs
npm install @nestjs/swagger swagger-ui-express
```

4. Directory Structure<br>
Organize your code like this:
```
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

5. Run MongoDB Locally<br>
Make sure MongoDB is running. Default connection is:
```
mongodb://localhost:27017/bookstore
```
Or replace it in MongooseModule.forRoot(...) in app.module.ts.

6. Start Your Server
```
npm run start:dev
```
Open Swagger documentation in your browser:
* http://localhost:3000/api/docs


<h2>Authentication Workflow</h2>
1.  Signup
