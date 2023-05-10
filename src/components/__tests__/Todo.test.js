import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../07-todo/Todo';

// it('should render Todo component', () => {
//     render(<App />);
//     const todoElement = screen.getByTestId('todo-1');
//     expect(todoElement).toBeInTheDocument();
// });

// test('test', () => {
//     expect(true).toBe(true);
// });

// describe('<Todo />', () => {
//     const mockTodo = { id: 1, todo: 'test todo' };

//     it('should render a todo object', () => {
//         const { debug, getByTestId } = render(<Todo todo={mockTodo} />);
//         const todoItem = getByTestId('todoItem');
//         expect(todoItem).toHaveTextContent(mockTodo.todo);
//         debug();
//     });
// });

// Cleanup.
// To ensure everything is clean and every test starts from the same starting point
// without anything existing there already.
afterEach(() => {
    cleanup();
});

describe('<Todo />', () => {
    it('should render To component', () => {
        render(<Todo />);
        const todoElement = screen.getByTestId('todo-div');
        expect(todoElement).toBeInTheDocument();
    });

    it('should render a non-completed todo', () => {
        const todo = { id: 1, todo: 'wash dishes', completed: false };
        render(<Todo todo={todo} />);
        const todoElement = screen.getByTestId('todo-1');
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('wash dishes');
    });

    it('should render a completed todo', () => {
        const todo = { id: 2, todo: 'write tests', completed: true };
        render(<Todo todo={todo} />);
        const todoElement = screen.getByTestId('todo-2');
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('write tests');
    });
});

// it('should render a non-completed todo', () => {
//     const todo = { id: 1, todo: 'wash dishes', completed: false };
//     render(<Todo todo={todo} />);
//     const todoElement = screen.getByTestId('todo-1');
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent('wash dishes');
// });

// it('should render a completed todo', () => {
//     const todo = { id: 2, todo: 'write tests', completed: true };
//     render(<Todo todo={todo} />);
//     const todoElement = screen.getByTestId('todo-2');
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent('write tests');
// });