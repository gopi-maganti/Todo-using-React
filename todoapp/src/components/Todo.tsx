import { useEffect, useState } from "react";

interface Task {
  id?: number;
  title: string;
  description: string;
  status: "NEW" | "IN_PROGRESS" | "COMPLETED";
}

function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState<Task>({ title: "", description: "", status: "NEW" });
  const [editingId, setEditingId] = useState<number | null>(null);

  const API_BASE_URL = "http://localhost:8080/api/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(API_BASE_URL);
    const data = await res.json();
    setTasks(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API_BASE_URL}/${editingId}` : API_BASE_URL;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "", status: "NEW" });
    setEditingId(null);
    fetchTasks();
  };

  const handleEdit = (task: Task) => {
    setForm(task);
    setEditingId(task.id ?? null);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="NEW">NEW</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <button type="submit">{editingId ? "Update" : "Add"}</button>
      </form>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <strong>{task.title}</strong> - {task.description} [{task.status}]
            <div>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id!)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
