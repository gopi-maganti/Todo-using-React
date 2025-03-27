# 📝 Todo Application

A full-stack Todo Application built with **React** (Frontend) and **Spring Boot** (Backend). This project demonstrates a simple task management system with CRUD functionality.

## 🚀 Features

- Add, update, delete, and retrieve todos
- Task status management: `NEW`, `IN_PROGRESS`, `COMPLETED`
- RESTful API with Spring Boot
- React-based UI with state management using hooks
- Cross-origin support for seamless frontend-backend integration

## 🛠️ Tech Stack

**Frontend**:

- React
- TypeScript
- Vite or Create React App (your preference)

**Backend**:

- Spring Boot
- Java
- JPA (Hibernate)
- Lombok
- Jakarta Validation

## 🗂️ Project Structure

```
├── backend/
│   ├── Controller/
│   │   └── TaskController.java
│   ├── models/
│   │   ├── Task.java
│   │   └── TaskStatus.java
│   └── service/
│       └── TaskService.java
├── frontend/
│   └── Todo.tsx
```

## 🔧 Setup Instructions

### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Build and run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

3. API will be available at: `http://localhost:8080/api/tasks`

### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. Frontend runs on: `http://localhost:3000`

## 📬 API Endpoints

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | `/api/tasks`      | Get all tasks        |
| GET    | `/api/tasks/{id}` | Get task by ID       |
| POST   | `/api/tasks`      | Create a new task    |
| PUT    | `/api/tasks/{id}` | Update existing task |
| DELETE | `/api/tasks/{id}` | Delete task by ID    |

## 🧪 Example Task Object

```json
{
  "title": "Write Documentation",
  "description": "Prepare README for GitHub",
  "status": "IN_PROGRESS"
}
```

## 📌 TODOs

- Improve error handling in frontend
- Add filtering/sorting functionality
- Add user authentication (optional future feature)

## 🤝 Contributing

Feel free to fork this repo, make changes, and submit a pull request. Contributions are welcome!
Contributions are welcome! Fork the repo, create a feature branch, and submit a pull request.

📧 Contact: [gopi.maganti1998@gmail.com](mailto:gopi.maganti1998@gmail.com)  
📌 GitHub: [github.com/gopi-maganti](https://github.com/gopi-maganti)

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---
