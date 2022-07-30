describe('Compliment Card Form Flow', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://complimentr.com/api', {
      fixture: "compliment.json",
      statusCode: 200
    })
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="compliments-button"]').click()
  })

  it('should display an error to the user if compliments do not load', () => {
    cy.intercept('GET', 'https://complimentr.com/api', {
      statusCode: 400
    })
    cy.visit('http://localhost:3000/create-card')
    .contains('.error-alert', 'Sorry, we can\'t load this page right now. Maybe go read a book or something?')
  })

  it('should display an error to the user if compliments do not load', () => {
    cy.intercept('GET', 'https://complimentr.com/api', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/create-card')
    .contains('.error-alert', 'Sorry, we can\'t load this page right now. Maybe go read a book or something?')
  })

  it('Should display a header and Compliment Card form', () => {
    cy.get('form')
    cy.contains('h1', 'Card Generator')
  })
  it('Should be able to generate a new compliment', () => {
    cy.intercept('GET', 'https://complimentr.com/api', {
      fixture: "compliment2.json",
      statusCode: 200
    })
    cy.get('[data-cy="get-quote-button"]').click()
    cy.get('form').within(() => {
      cy.contains('[data-cy="quote"]', 'your cat is particularly dreamy')
    })
  })
  it('Should be able to fill out input fields', () => {
    cy.get('form').within(() => {
      cy.get('[data-cy="to-input"]').type('Scott')
      cy.contains('[data-cy="quote"]', 'people say you are distinctly supercalifragilisticexpialidocious')
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
})