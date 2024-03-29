import React from 'react';

// const Form = (props) => {
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    // props.setInputText(e.target.value)
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className='form'>
      <input
        data-testid='form-input'
        data-cy='form-input'
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button
        data-testid='add-btn'
        data-cy='todo-btn'
        onClick={submitTodoHandler}
        className='todo-button'
        type='submit'
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
