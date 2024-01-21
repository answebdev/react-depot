import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
    it('should render main App component', async () => {
        render(<App />);
        const todoElement = screen.getByTestId('todo-app');
        expect(todoElement).toBeInTheDocument();
    });

    it('should render main header', async () => {
        render(<App />);
        const header = screen.getByText(/todo list/i);
        //const header = screen.getByText("Todo List");
        expect(header).toBeInTheDocument();
    });
});

