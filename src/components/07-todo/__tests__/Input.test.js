import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';

// For a long time now cleanup happens automatically (supported for most major testing frameworks)
// and you no longer need to worry about it.
// Advice: don't use cleanup
// Link: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-cleanup

// Advice: don't use cleanup
// afterEach(() => {
//     cleanup();
// });

// For our first test below (lines 25-34), we only care about the todos, so we can just set the 'setTodos' hook to an empty object.
// However, the better approach is to mock the object.
const mockedSetTodos = jest.fn();

// Create a constant to avoid repetition when adding multiple todos in test
// (see integration tests below)
const addTask = (tasks) => {
    const inputElement = screen.getByTestId('form-input');
    const buttonElement = screen.getByTestId('add-btn');
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
};

// Clear local storage before each test.
// Link: https://github.com/donavon/use-persisted-state/issues/12
beforeEach(() => {
    window.localStorage.clear();
});

describe('<Form />', () => {
    it('should render input element', async () => {
        render(
            <App
                todos={[]}
                setTodos={mockedSetTodos}
            />
        );
        const inputElement = screen.getByTestId('form-input');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        render(
            <App
                todos={[]}
                setTodos={mockedSetTodos}
            />
        );
        const inputElement = screen.getByTestId('form-input');
        // Trigger the 'type' event using the 'fireEvent' function.
        // Using the 'change' event, we want to change the value of the input:
        // The first parameter is the input element that we want to change, so here, the 'input' element.
        // The second parameter is what we want to change by.
        // Here, we want to change the target value to 'Go shopping'.
        fireEvent.change(inputElement, { target: { value: 'Go shopping' } });
        expect(inputElement.value).toBe('Go shopping');
    });

    it('should have empty input when add button is clicked', async () => {
        render(
            <App
                todos={[]}
                setTodos={mockedSetTodos}
            />
        );
        const inputElement = screen.getByTestId('form-input');
        // Get the Add button:
        const buttonElement = screen.getByTestId('add-btn');
        fireEvent.change(inputElement, { target: { value: 'Go shopping' } });
        fireEvent.click(buttonElement);
        expect(buttonElement.value).toBe('');
    });
});

// INTEGRATION TESTS
describe('<App />', () => {
    // This is an integration test because we are testing two components and how they interact with one another:
    // 1. When typing a todo and clicking the add button (input component),
    // 2. we should see that same exact value (i.e., the todo) rendered in the TodoList component.

    // it('should render the same todo value that was added', async () => {
    //     render(<App />);
    //     const inputElement = screen.getByTestId('form-input');
    //     const buttonElement = screen.getByTestId('add-btn');
    //     fireEvent.change(inputElement, { target: { value: 'Write tests' } });
    //     fireEvent.click(buttonElement);
    //     const todo = screen.getByText(/Write tests/i);
    //     expect(todo).toBeInTheDocument();
    // });

    it('should render the same todo value that was added', async () => {
        render(<App />);
        addTask(['Write tests']);
        const todo = screen.getByText(/Write tests/i);
        expect(todo).toBeInTheDocument();
    });

    it('should render multiple todo items', async () => {
        render(<App />);
        addTask(['Write tests', 'Clean room', 'Wash car']);
        const todos = screen.getAllByTestId('todo-container');
        expect(todos.length).toBe(3);
    });

    it('should not have completed class when item is initially rendered', async () => {
        render(<App />);
        addTask(['Write tests']);
        const todo = screen.getByText(/Write tests/i);
        expect(todo).not.toHaveClass('completed');
    });

    it('should have completed class when complete button is clicked', async () => {
        render(<App />);
        addTask(['Write tests']);
        const todo = screen.getByText(/Write tests/i);
        const completeBtn = screen.getByTestId('complete-btn');
        fireEvent.click(completeBtn);
        expect(todo).toHaveClass('completed');
    });
});
