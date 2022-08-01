describe('Joke Card Form Flow', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', {
      fixture: "joke.json",
      statusCode: 200
    })
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="jokes-button"]').click()
  })
  it('Should display an error to the user if jokes do not load', () => {
    cy.intercept('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', {
      statusCode: 400
    })
    cy.visit('http://localhost:3000/create-card')
    .contains('.error-alert', 'Sorry, we can\'t load this page right now. Maybe go read a book or something?')
  })
  it('Should display an error to the user if jokes do not load', () => {
    cy.intercept('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/create-card')
    .contains('.error-alert', 'Sorry, we can\'t load this page right now. Maybe go read a book or something?')
  })
  it('Should display a header and Joke Card form', () => {
    cy.contains('h1', 'Card Party')
    cy.get('form')
  })
  it('Should be able to generate a new joke', () => {
    cy.intercept('GET', 'https://geek-jokes.sameerkumar.website/api?format=json', {
      fixture: "joke2.json",
      statusCode: 200
    })
    cy.get('[data-cy="get-quote-button"]').click()
    cy.get('form').within(() => {
      cy.contains('[data-cy="quote"]', 'Love does not hurt. Chuck Norris does.')
    })
  })
  it('Should be able to fill out input fields', () => {
    cy.get('form').within(() => {
      cy.get('[data-cy="to-input"]').type('Scott')
      cy.contains('[data-cy="quote"]', 'I would love to change the world but they won’t give me the source code.')
      cy.get('[data-cy="message-input"]').type('U R GR8!!!!!!!')
      cy.get('[data-cy="from-input"]').type('A. C. G. K.')
    })
  })
  it('Should be able to make a card and go to Card Preview Page', () => {
    cy.get('form').within(() => {
      cy.get('[data-cy="to-input"]').type('Scott')
      cy.get('[data-cy="message-input"]').type('U R GR8!!!!!!!')
      cy.get('[data-cy="from-input"]').type('A. C. G. K.')
      cy.get('[data-cy="make-card-button"]').click()
    })
    cy.url().should('eq', 'http://localhost:3000/preview-card')
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})