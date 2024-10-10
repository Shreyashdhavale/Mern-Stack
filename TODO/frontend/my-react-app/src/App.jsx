import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

  // Function to fetch todos from the database
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todos");
      setTodo(response.data); // Set the todo state to the fetched todos
    } catch (error) {
      console.log("Error featching todos:", error);
    }
  };

  // Use useEffect to fetch todos when the component mounts
  useEffect(() => {
    fetchTodos(); // Fetch todos when the app is loaded
  }, []);

  // Function to handle adding a new todo
  const handleTodo = async () => {
    if (!data) return; // Prevent adding empty todos
    try {
      const response = await axios.post("http://localhost:8000/add", { todo: data });
      console.log("Data Added:", response.data);
      setTodo((prev) => [...prev, response.data]); // Update the state with the new todo
      setData(''); // Clear the input field
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // Function to remove a todo
  const HandleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/remove/${id}`); // Remove the todo from the database
      setTodo((prev) => prev.filter(item => item._id !== id)); // Update the state to remove the deleted todo
    } catch (error) {
      console.log("Error removing todo:", error);
    }
  };

  return (
    <div className="container">
      <h1>TODO List</h1>
      <div className="input-container">
        <input
          type="text"
          value={data}
          placeholder="Enter the element.."
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button className="add-button" onClick={handleTodo}>Add</button>
      </div>
      <div>
        <ul>
          {todo.map((item) => (
            <li key={item._id}>
              {item.Item}
              <button
                className="remove-button"
                onClick={() => {
                  HandleRemove(item._id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;