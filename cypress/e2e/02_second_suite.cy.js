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

  it('removes first tour card', () => {
    cy.log(
      'checks that "Best of Paris in 7 Days Tour" text displays on first card'
    );
    cy.get('[data-testid=tour-name]').should(
      'contain.text',
      'Best of Paris in 7 Days Tour'
    );

    cy.get('[data-testid=tour-name]')
      .eq(0)
      .should('contain', 'Best of Paris in 7 Days Tour');

    cy.log('checks that Not Interested button removes the first tour card');
    cy.get('[data-testid=delete-btn]')
      .eq(0)
      .click();
  });

  it('shows more text on second tour card', () => {
    cy.log(
      'checks that "Best of Paris in 7 Days Tour" text displays on first card'
    );
    cy.get('[data-testid=tour-name]').should(
      'contain.text',
      'Best of Paris in 7 Days Tour'
    );

    cy.get('[data-testid=tour-name]')
      .eq(0)
      .should('contain', 'Best of Paris in 7 Days Tour');

    cy.log('checks that Not Interested button removes the first tour card');
    cy.get('[data-testid=delete-btn]')
      .eq(0)
      .click();

    // ============================

    cy.log(
      'checks that "Best of Ireland in 14 Days Tour" text displays on second card'
    );

    cy.get('[data-testid=tour-name]').should(
      'contain.text',
      'Best of Ireland in 14 Days Tour'
    );

    cy.get('[data-testid=tour-name]')
      .eq(0)
      .should('contain', 'Best of Ireland in 14 Days Tour');

    cy.log('checks that Read More button shows more text on second card');
    cy.get('[data-testid=read-more-less]')
      .eq(0)
      .click();
  });

  // ========================

  it('shows less text on second tour card', () => {
    cy.log(
      'checks that "Best of Paris in 7 Days Tour" text displays on first card'
    );
    cy.get('[data-testid=tour-name]').should(
      'contain.text',
      'Best of Paris in 7 Days Tour'
    );

    cy.get('[data-testid=tour-name]')
      .eq(0)
      .should('contain', 'Best of Paris in 7 Days Tour');

    cy.log('checks that Not Interested button removes the first tour card');
    cy.get('[data-testid=delete-btn]')
      .eq(0)
      .click();

    // ============================

    // NEED TO CHECK THIS TEST - I THINK IT CURRENTLY CLICKS ON 'SEE LESS' BUTTON OF ALL CARDS
    // INSTEAD OF JUST THE FIRST ONE.

    // ALSO: MAYBE REMOVE 'BEFORE EACH' UP TOP AND RE-WRITE TESTS.
    // WRITE NOW, IT'S VISTING '/tours' BEFORE EACH TEST.

    cy.log(
      'checks that "Best of Ireland in 14 Days Tour" text displays on second card'
    );

    cy.get('[data-testid=tour-name]').should(
      'contain.text',
      'Best of Ireland in 14 Days Tour'
    );

    cy.get('[data-testid=tour-name]')
      .eq(0)
      .should('contain', 'Best of Ireland in 14 Days Tour');

    cy.log('checks that Show Less button shows less text on second card');
    // cy.get('[data-testid=read-more-less]');

    if (cy.get('[data-testid=read-more-less]').length > 0) {
      // Evaluates as true
      cy.get('[data-testid=read-more-less]')
        .eq(0)
        .click();
    }
  });
});
