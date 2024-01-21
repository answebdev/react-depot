import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('test', () => {
    expect(true).toBe(true);
});

it('should render App component', async () => {
    render(<App />);
    const tabElement = screen.getByTestId('tabs-1');
    expect(tabElement).toBeInTheDocument();
});



// describe('<App />', () => {
//     it('should render main App component', async () => {
//         render(<App />);
//         const mainComponent = screen.getByTestId('tabs-container');
//         expect(mainComponent).toBeInTheDocument();
//     });

//     it('should render main header', async () => {
//         render(<App />);
//         const mainHeader = screen.getByText(/experience/i);
//         // const mainHeader = screen.getByText(/experience/i);
//         //const header = screen.getByText('Experience');
//         expect(mainHeader).toBeInTheDocument();
//     });
// });

// Mock request
// describe('Fetch job data', () => {
//     it('fetch and display job data', async () => {
//         render(<App />);
//         const jobElement = await screen.findByText('Full Stack Web Developer');
//         expect(jobElement).toBeInTheDocument();
//     });
// });

