/// <reference types="cypress" />

// getAllLocalStorage Docs: https://docs.cypress.io/api/commands/getalllocalstorage

describe('Fifth test suite', () => {
  beforeEach(() => {
    cy.visit('/todo');
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
    // Custom Command (see commands.js)
    cy.addTodos();
    cy.get('[data-cy="todo-list"]').as('todoList');
    cy.get('@todoList').should('have.length', 3);
    cy.get('@todoList').should('contain', 'Practice coding');
    cy.get('@todoList').should('contain', 'Go to the store');
    cy.get('@todoList').should('contain', 'Take a nap');
  });

  it('should add todos by clicking the Enter key', () => {
    cy.get('[data-cy="form-input"]').type('Practice coding{enter}');
    cy.get('[data-cy="form-input"]').type('Go to the store{enter}');
    cy.get('[data-cy="form-input"]').type('Take a nap{enter}');

    cy.get('[data-cy="todo-list"]').as('todoList');
    cy.get('@todoList').should('have.length', 3);
    cy.get('@todoList').should('contain', 'Practice coding');
    cy.get('@todoList').should('contain', 'Go to the store');
    cy.get('@todoList').should('contain', 'Take a nap');
  });

  it('should delete a todo', () => {
    cy.addTodos();
    cy.get('[data-cy="delete-btn"]')
      .eq(1)
      .click();
    cy.get('[data-cy="todo-list"]').should('have.length', 2);
  });

  it('should mark a todo as complete', () => {
    cy.addTodos();
    cy.get('[data-cy="complete-btn"]')
      .eq(1)
      .click();
    cy.get('[data-cy="todo-list"]')
      .eq(1)
      .should('contain', 'Go to the store');
    cy.get('.todo .completed').should(
      'have.css',
      'text-decoration',
      'line-through solid rgb(0, 0, 0)'
    );
    cy.get('.todo .completed').should('have.css', 'opacity', '0.5');
    cy.get('[data-cy="todo-list"]').should('have.length', 3);
  });

  it('should select completed todos from dropdown', () => {
    cy.addTodos();
    cy.get('[data-cy="complete-btn"]')
      .eq(1)
      .click();
    cy.get('select').select('completed'); // Select the 'completed' option
  });

  it('should select uncompleted todos from dropdown', () => {
    cy.addTodos();
    cy.get('[data-cy="complete-btn"]')
      .eq(1)
      .click();
    cy.get('select').select('uncompleted');
  });
});
