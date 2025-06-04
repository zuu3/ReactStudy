import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import './TodoList.css';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      setTodos(data || []);
    }
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const { data, error } = await supabase
      .from('todos')
      .insert([{ title: newTodo, completed: false }]);

    if (error) {
      console.error('Error adding todo:', error);
    } else {
      setNewTodo('');
      fetchTodos();
    }
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    const { error } = await supabase
      .from('todos')
      .update({ completed: !completed })
      .eq('id', id);

    if (error) {
      console.error('Error updating todo:', error);
    } else {
      fetchTodos();
    }
  };

  const deleteTodo = async (id: number) => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting todo:', error);
    } else {
      fetchTodos();
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">할 일 목록</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="새로운 할 일 추가"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          추가
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
                className="todo-checkbox"
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="todo-delete"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 