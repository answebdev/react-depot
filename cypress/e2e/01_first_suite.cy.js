/// <reference types="cypress" />

describe('First test suite', () => {
  it('should visit React Depot home page', () => {
    cy.visit('/');
    cy.url().should('include', '/');
    cy.log('Checking that navbar has the text of the app');
    cy.get('[data-testid="app-name"]').should('have.text', 'React Depot');
    cy.log('Checking that h1 tag has "Projects" text');
    cy.get('[data-testid="title"]').should('have.text', 'Projects');
  });
});
