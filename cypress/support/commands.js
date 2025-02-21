/// <reference types="cypress" />

// Add custom commands here
Cypress.Commands.add('login', (username, password) => {
    cy.request('POST', '/login', {
      username,
      password
    }).then((resp) => {
      window.localStorage.setItem('authToken', resp.body.token);
    });
  });