import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

// For a long time now cleanup happens automatically (supported for most major testing frameworks)
// and you no longer need to worry about it.
// Advice: don't use cleanup
// Link: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-cleanup

// afterEach(() => {
//     cleanup();
// });

describe('<App />', () => {
    it('should render the correct number of birthdays', async () => {
        render(<App people={5} />);
        const h3Element = screen.getByText(/5 birthdays today/i);
        expect(h3Element).toBeInTheDocument();
    });

    it('should render the correct text content', async () => {
        render(<App people={5} />);
        const h3Element = screen.getByText(/5 birthdays today/i);
        expect(h3Element).toHaveTextContent("5 birthdays today");
    });

    it('should render the correct text content', async () => {
        render(<App people={5} />);
        const h3Element = screen.getByText(/5 birthdays today/i);
        expect(h3Element.textContent).toBe("5 birthdays today");
    });
});
