import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Form from './Form';
import TodoList from './TodoList';
import './todo-style.css';

// Video: https://www.youtube.com/watch?v=pCA4qpQDZD8
// Repo: https://github.com/developedbyed/vanilla-todo (JavaScript version)
// JS Todo: https://www.youtube.com/watch?v=Ttf3CEsEwMQ

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Todo App</title>
          <style type='text/css'>
            {`
              body {
                background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
                color: white;
                font-family: 'Poppins', sans-serif;
                min-height: 100vh;
              }
            `}
          </style>
        </Helmet>
      </div>
      <div data-testid='todo-app'
        className='App'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4em',
        }}
      >
        <header>
          <h1 data-cy='main-header'>Todo List</h1>
        </header>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
};

export default App;
