import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Tours from '../Tours';
import Tour from '../Tour';

// In the component, we are making a Get request to an external API, getting some tour data, and then rendering that data.
// When the page is refreshed, there's a little bit of asynchronousity (i.e., the data does not render right away/initially).
// Therefore, since it is asynchronous and the data does not load right away,
// there is a brief moment when that data is not going to exist on the page (rather, it will show loading, or a spinner, etc.)

// Therefore, in order to avoid getting an error in our test, we need to use 'async/await' (see first test below).
// But NOTE (IMPORTANT): 'async/await' does NOT work with 'getByTestId'.
// Therefore, instead of using 'getByTestId', we need to use 'findByTestId'.

// Video: https://www.youtube.com/watch?v=V2wWLM8VX5k&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=13

// describe('Fetch tour data', () => {
//     it('should render one tour item', async () => {
//         render(<Tours />);
//         const tourElement = await screen.findByTestId('tour-item-0');
//         // Console logs the element to see what is being rendered:
//         // screen.debug();
//         expect(tourElement).toBeInTheDocument();
//     });
// });

describe('Fetch tour data', () => {
    it('fetch and display tours', async () => {
        render(<Tours />);
        const tourElement = await screen.findByText('Best of Paris in 7 Days Tour');
        expect(tourElement).toBeInTheDocument();
    });
});