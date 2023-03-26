// /// <reference types="cypress" />

// describe('Second test suite', () => {
//   beforeEach(() => {
//     cy.visit('/tours');
//   });

//   it('should visit Tours page', () => {
//     cy.url().should('include', '/tour');
//     cy.log('Checking that h2 tag has "Our Tours" text');
//     cy.get('[data-testid="header"]').should('have.text', 'Our Tours');
//   });

//   it('removes first tour card', () => {
//     cy.log(
//       'checks that "Best of Paris in 7 Days Tour" text displays on first card'
//     );
//     cy.get('[data-testid="tour-name"]').should(
//       'contain.text',
//       'Best of Paris in 7 Days Tour'
//     );

//     cy.get('[data-testid="tour-name"]')
//       .eq(0)
//       .should('contain', 'Best of Paris in 7 Days Tour');

//     cy.log('checks that Not Interested button removes the first tour card');
//     cy.get('[data-testid="delete-btn"]')
//       .eq(0)
//       .click();
//   });

//   it('shows more text on second tour card', () => {
//     cy.log(
//       'checks that "Best of Paris in 7 Days Tour" text displays on first card'
//     );
//     cy.get('[data-testid="tour-name"]').should(
//       'contain.text',
//       'Best of Paris in 7 Days Tour'
//     );

//     cy.get('[data-testid="tour-name"]')
//       .eq(0)
//       .should('contain', 'Best of Paris in 7 Days Tour');

//     cy.log('checks that Not Interested button removes the first tour card');
//     cy.get('[data-testid="delete-btn"]')
//       .eq(0)
//       .click();

//     // ============================

//     cy.log(
//       'checks that "Best of Ireland in 14 Days Tour" text displays on second card'
//     );

//     cy.get('[data-testid="tour-name"]').should(
//       'contain.text',
//       'Best of Ireland in 14 Days Tour'
//     );

//     cy.get('[data-testid="tour-name"]')
//       .eq(0)
//       .should('contain', 'Best of Ireland in 14 Days Tour');

//     cy.log('checks that Read More button shows more text on second card');
//     cy.get('[data-testid="read-more-less"]')
//       .eq(0)
//       .click();
//   });

//   // ========================

//   it('shows less text on second tour card', () => {
//     cy.log(
//       'checks that "Best of Paris in 7 Days Tour" text displays on first card'
//     );
//     cy.get('[data-testid="tour-name"]').should(
//       'contain.text',
//       'Best of Paris in 7 Days Tour'
//     );

//     cy.get('[data-testid="tour-name"]')
//       .eq(0)
//       .should('contain', 'Best of Paris in 7 Days Tour');

//     cy.log('checks that Not Interested button removes the first tour card');
//     cy.get('[data-testid="delete-btn"]')
//       .eq(0)
//       .click();

//     // ============================

//     // NEED TO CHECK THIS TEST - I THINK IT CURRENTLY CLICKS ON 'SEE LESS' BUTTON OF ALL CARDS
//     // INSTEAD OF JUST THE FIRST ONE.

//     // ALSO: MAYBE REMOVE 'BEFORE EACH' UP TOP AND RE-WRITE TESTS.
//     // WRITE NOW, IT'S VISTING '/tours' BEFORE EACH TEST.

//     cy.log(
//       'checks that "Best of Ireland in 14 Days Tour" text displays on second card'
//     );

//     cy.get('[data-testid="tour-name"]').should(
//       'contain.text',
//       'Best of Ireland in 14 Days Tour'
//     );

//     cy.get('[data-testid="tour-name"]')
//       .eq(0)
//       .should('contain', 'Best of Ireland in 14 Days Tour');

//     cy.log('checks that Show Less button shows less text on second card');
//     // cy.get('[data-testid="read-more-less"]');

//     if (cy.get('[data-testid="read-more-less"]').length > 0) {
//       // Evaluates as true
//       cy.get('[data-testid="read-more-less"]')
//         .eq(0)
//         .click();
//     }
//   });
// });

/// <reference types="cypress" />

// React JS Cypress Mock HTTP Requests: https://www.youtube.com/watch?v=yCao-kxIcF8
// Stubbing and Mocking Network Request with Cypress new Intercept: https://www.youtube.com/watch?v=tidy0Bm5PGM
// https://www.webtips.dev/webtips/cypress/wait-for-elements-to-be-visible-in-cypress

describe('Second test suite', () => {
  beforeEach(() => {
    cy.visit('/tours');
    cy.log('Mocking GET request to fetch tour data');
    cy.intercept('GET', 'https://course-api.com/react-tours-project', {
      statusCode: 200,
      body: {
        id: 'recK2AOoVhIHPLUwn',
        name: 'Best of Rome in 7 Days Tour',
        info:
          "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
        image: 'https://images2.imgbox.com/67/2f/Sk5x6VxF_o.jpeg',
        price: '2,095',
      },
    }).as('success');
  });

  it('should visit Tours page', () => {
    cy.url().should('include', '/tours');

    cy.log('Waiting for header to be visible');
    cy.get('[data-testid="header"]').should('be.visible');

    cy.log('Checking that h2 tag has "Our Tours" text');
    cy.get('[data-testid="header"]').should('contain.text', 'Our Tours');
  });

  it('removes first tour card', () => {
    cy.log(
      'checks that "Best of Paris in 7 Days Tour" text displays on first card'
    );
    cy.get('[data-testid="tour-name"]').should(
      'contain.text',
      'Best of Paris in 7 Days Tour'
    );

    cy.get('[data-testid="tour-name"]')
      .eq(0)
      .should('contain', 'Best of Paris in 7 Days Tour');

    cy.log('checks that Not Interested button removes the first tour card');
    cy.get('[data-testid="delete-btn"]')
      .eq(0)
      .click();
  });

  it('shows more text on first tour card', () => {
    cy.log(
      'checks that "Best Of Paris In 7 Days Tour" text displays on first card'
    );

    cy.get('[data-testid="tour-name"]').should(
      'contain.text',
      'Best of Paris in 7 Days Tour'
    );

    cy.get('[data-testid="tour-name"]')
      .eq(0)
      .should('contain', 'Best of Paris in 7 Days Tour');

    cy.log('checks that Read More button shows more text when clicked');
    cy.get('[data-testid="read-more-less"]')
      .eq(0)
      .click();
  });
});
