/// <reference types="cypress" />

// CYPRESS INTERCEPT Response | Cypress Mock API Response
// Source: https://www.youtube.com/watch?v=z57lsgbImug&list=PLYDwWPRvXB8-8LG2hZv25HO6C3w_vezZb&index=16

// Mock API responses may be useful during development and testing when live data is either unavailable or unreliable.
// While designing an API, you can use mock APIs to work concurrently on the front and back-end, as well as to gather feedback from developers.

// Mocking an API response using cy.intercept:
describe('Fourth test suite', () => {
  it('should visit Our Tours page', () => {
    cy.visit('/tours');
    cy.url().should('include', '/tours');
    cy.log('Checking that h1 tag has "Our Tours" text');
    cy.get('[data-testid="header"]').should('have.text', 'Our Tours');
  });

  it('should load correct data', () => {
    cy.visit('/tours');
    cy.get('.single-tour')
      .should('have.length', 5)
      .and('contain', 'Best of Paris in 7 Days Tour')
      .and(
        'contain',
        'Paris is synonymous with the finest things that culture can offer'
      );
  });

  it('should mock the API response', () => {
    cy.intercept('GET', '/', { fixture: 'tours.json' }).as('getTours');
    cy.visit('/tours');
    cy.get('.single-tour')
      .should('have.length', 5)
      .should('contain', 'Best of Paris in 7 Days Tour')
      .and(
        'contain',
        'Paris is synonymous with the finest things that culture can offer'
      );
  });
});
