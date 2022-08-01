describe('Preview Card Page Flow', () => {
    beforeEach(()=> {
      cy.create()
    })
    it('Should be able to display header', () => {
        cy.contains('h1', 'Card Party')
    })
    it('Should be able to display a preview of a new card', () => {
        cy.contains('.to-field', 'To: Scott')
        cy.contains('.quote-field', 'I would love to change the world but they won’t give me the source code.')
        cy.contains('.message-field', 'U R GR8!!!!!!!')
        cy.contains('.from-field', 'From: A. C. G. K.')
    })
    it('Should be able to navigate to create a new card page', () => {
        cy.get('.new-card-button').click()
        cy.url().should('eq', 'http://localhost:3000/create-card')
    })
    it('Should be able to navigate to saved cards page', () => {
        cy.get('.save-card-button').click()
        cy.url().should('eq', 'http://localhost:3000/saved-cards')
    })
    it('Should be able to click favorites buttons to navigate to saved cards page', () => {
        cy.get('[data-cy="show-saved"]')
          .click()
          .url()
          .should('eq', 'http://localhost:3000/saved-cards')
    })
    it('Should be able to return home by clicking the title', () => {
        cy.get('h1').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})