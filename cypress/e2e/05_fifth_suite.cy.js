/// <reference types="cypress" />

// describe('Fifth test suite', () => {
//   beforeEach(() => {
//     cy.visit('/todo');
//   });

//   it('should be on todos page', () => {
//     cy.get('[data-cy="main-header"]').should('contain.text', 'Todo List');
//   });
// });

describe('Fifth test suite', () => {
  beforeEach(() => {
    cy.visit('/todo');
  });

  it('should visit Tours page', () => {
    cy.get('[data-cy="main-header"]').contains('Todo List');
  });
});
