/// <reference types="cypress" />

describe('Second test suite', () => {
  beforeEach(() => {
    cy.visit('/tours');
  });

  it('should visit Tours page', () => {
    cy.url().should('include', '/tour');
    cy.log('Checking that h2 tag has "Our Tours" text');
    cy.get('[data-testid=header]').should('have.text', 'Our Tours');
  });
});
