describe('Home Page Flow', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  })
  it('Should be able to display header', () => {
    cy.contains('h1', 'Card Generator')
  })
  it('Should be able to display the description of the page', () => {
    cy.contains('h2', 'Do you want to show your friends and family that you’re thinking about them, but you aren’t quite sure what to say? Liven up someone’s day with Card Party, the greeting card generator that provides a random joke or compliment to brighten someone’s day.')
  })
  it('Should be able to display the description of the page', () => {
    cy.contains('p', 'Make a card for your mom, or your pets, or your friends, or your mailman! The choice is yours.')
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