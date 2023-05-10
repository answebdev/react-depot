import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='todo' data-testid='todo-div'>
      <li
        data-testid={`todo-${todo.id}`}
        data-cy='todo-list'
        className={`todo-item ${todo.completed ? 'completed' : ''}`}
      >
        {text}
      </li>
      <button
        data-cy='complete-btn'
        onClick={completeHandler}
        className='complete-btn'
      >
        <i className='fas fa-check'></i>
      </button>
      <button
        data-cy='delete-btn'
        onClick={deleteHandler}
        className='trash-btn'
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
