describe('Home Page Flow', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  })
  it('Should be able to display header', () => {
    cy.contains('h1', 'Card Generator')
  })
  it('Should be able to display the description of the page', () => {
    cy.contains('h2', 'Do you wanna have friends and be PoPuLaR!!!!!')
  })
  it('Should be able to display the description of the page', () => {
    cy.contains('p', 'Make a card for your mom or your dad or your pets or your friends or your mailman')
  })
  it('Should be able to click compliment button to navigate to compliment card option', () => {
    cy.get('[data-cy="compliments-button"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/create-card')
  })
  it('Should be able to click joke button to navigate to jokes card option', () => {
    cy.get('[data-cy="jokes-button"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/create-card')
  })
  it('Should be able to click favorites buttons to navigate to saved cards page', () => {
    cy.get('[data-cy="show-saved"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/saved-cards')
  })
})