/// <reference types="cypress" />

// getAllLocalStorage Docs: https://docs.cypress.io/api/commands/getalllocalstorage

describe('Fifth test suite', () => {
  beforeEach(() => {
    // cy.visit('/todo');
    cy.visit('http://localhost:3000/todo');
  });

  it('should validate the form input', () => {
    cy.get('[data-cy="main-header"]').contains('Todo List');
    cy.get('[data-cy="form-input"]')
      .focus()
      .blur();
    // Make sure <form> tag that wraps the input field has a class that contains the word 'form'.
    cy.get('[data-cy="form-input"]')
      .parent()
      .should('have.attr', 'class')
      .and('match', /form/);
    cy.get('[data-cy="form-input"]').should(
      'have.css',
      'background',
      'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box'
    );
  });

  it('should add todos', () => {
    cy.get('[data-cy="form-input"]').type('Practice coding');
    cy.get('[data-cy="todo-btn"]').click();
    cy.get('[data-cy="form-input"]').type('Go to the store');
    cy.get('[data-cy="todo-btn"]').click();
    cy.get('[data-cy="form-input"]').type('Take a nap');
    cy.get('[data-cy="todo-btn"]').click();

    cy.get('[data-cy="todo-list"]').as('todoList');
    cy.get('@todoList').should('have.length', 3);
    cy.get('@todoList').should('contain', 'Practice coding');
    cy.get('@todoList').should('contain', 'Go to the store');
    cy.get('@todoList').should('contain', 'Take a nap');

    // cy.reload();
  });

  //   it('should add a second todo', () => {
  //     cy.get('[data-cy="form-input"]').type('Go to the store');
  //     cy.get('[data-cy="todo-btn"]').click();
  //     cy.get('[data-cy="todo-list"]').should('have.length', 1);
  //     cy.get('[data-cy="todo-list"]').should('contain', 'Go to the store');
  //   });

  it('should add todos by clicking the Enter key', () => {
    cy.get('[data-cy="form-input"]').type('Practice coding{enter}');
    cy.get('[data-cy="form-input"]').type('Go to the store{enter}');
    cy.get('[data-cy="form-input"]').type('Take a nap{enter}');

    cy.get('[data-cy="todo-list"]').as('todoList');
    cy.get('@todoList').should('have.length', 3);
    cy.get('@todoList').should('contain', 'Practice coding');
    cy.get('@todoList').should('contain', 'Go to the store');
    cy.get('@todoList').should('contain', 'Take a nap');

    // cy.reload();
  });
});
