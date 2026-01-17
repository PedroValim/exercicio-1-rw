describe('Visualizar Histórico de Transações', () => {

  beforeEach(() => {
    cy.visit('/signin')

    cy.get('[data-test="signin-username"]').type('cypress_user')
    cy.get('[data-test="signin-password"]').type('123456')
    cy.get('[data-test="signin-submit"]').click()

    cy.url().should('include', '/')
  })

  it('Deve exibir o histórico de transações com sucesso', () => {
    cy.get('[data-test="nav-personal"]').click()

    cy.get('[data-test="transaction-list"]').should('exist')
    cy.get('[data-test="transaction-item"]').should('have.length.greaterThan', 0)

    cy.get('[data-test="transaction-item"]')
      .first()
      .within(() => {
        cy.get('[data-test="transaction-amount"]').should('exist')
        cy.get('[data-test="transaction-user"]').should('exist')
        cy.get('[data-test="transaction-date"]').should('exist')
      })
  })

  it('Deve exibir mensagem quando não houver transações anteriores', () => {
    cy.get('[data-test="nav-personal"]').click()

    cy.contains('No Transactions').should('be.visible')
  })
})
