Cypress.Commands.add("create", () => {
  const baseURL = 'http://localhost:3000';
    cy.intercept('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', {
        fixture: "joke.json",
        statusCode: 200
    })
    cy.visit(baseURL)
    cy.get('[data-cy="jokes-button"]').click()
    cy.get('[data-cy="to-input"]').type('Scott')
    cy.get('[data-cy="message-input"]').type('U R GR8!!!!!!!')
    cy.get('[data-cy="from-input"]').type('A. C. G. K.')
    cy.get('[data-cy="make-card-button"]').click()
})
Cypress.Commands.add("save", () => { 
  cy.get('.save-card-button').click()
})