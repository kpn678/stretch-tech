describe('Saved Cards Page Flow', () => {
    beforeEach(()=> {
      cy.create()
      cy.save()
    })
    it('Should be able to display header and cards grid', () => {
        cy.contains('h1', 'Card Generator')
        cy.get('.cards-grid').should('be.visible')
    })
    it('Should display all saved cards', () => {
        cy.get('.mini-card').should('have.length', 2)
    })
    it('Should display a card with a "to", "quote", "message" and "from"', () => {
        cy.get('.mini-card').eq(0).within(() => {
            cy.contains('.mini-to', 'To: Scott')
            cy.contains('.mini-quote', 'I would love to change the world but they won’t give me the source code.')
            cy.contains('.mini-message', 'U R GR8!!!!!!!')
            cy.contains('.mini-from', 'From: A. C. G. K.')
        })
    })
    it.only('Should be able to delete a card', () => {
        cy.get('.mini-card').get('.delete-button').eq(1).click()
        cy.get('.mini-card').should('have.length', 1)
    })

    // it('Should be able to return home by clicking the title', () => {
    //     cy.get('h1').click()
    //     cy.url().should('eq', 'http://localhost:3000/')
    // })
})