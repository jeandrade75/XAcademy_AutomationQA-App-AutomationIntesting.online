// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('validateEmptyFormSubmission', () => {
    cy.get('#submitContact').click();
    cy.get('.alert').should('be.visible');
    cy.get('p').contains('Subject must be between 5 and 100 characters.');
    cy.get('p').contains('Subject may not be blank');
    cy.get('p').contains('Name may not be blank');
    cy.get('p').contains('Message must be between 20 and 2000 characters.');
    cy.get('p').contains('Message may not be blank');
    cy.get('p').contains('Email may not be blank');
    cy.get('p').contains('Phone may not be blank');
    cy.get('p').contains('Phone must be between 11 and 21 characters.');
});

