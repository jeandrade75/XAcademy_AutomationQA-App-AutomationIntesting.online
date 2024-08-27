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

Cypress.Commands.add('fillContactForm', (name, email, phone, subject, message) => {
    if (name) cy.get('input[placeholder="Name"]').type(name);
    if (email) cy.get('input[placeholder="Email"]').type(email);
    if (phone) cy.get('input[placeholder="Phone"]').type(phone);
    if (subject) cy.get('input[placeholder="Subject"]').type(subject);
    if (message) cy.get('[data-testid="ContactDescription"]').type(message);
});

Cypress.Commands.add('submitContactForm', () => {
    cy.get('#submitContact').click();
});

Cypress.Commands.add('validateErrorMessages', (messages) => {
    messages.forEach((msg) => {
        cy.get('p').contains(msg);
    });
});
