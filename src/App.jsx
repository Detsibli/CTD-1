import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('New task');

  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
