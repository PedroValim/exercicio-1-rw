describe('Enviar Dinheiro', () => {

  beforeEach(() => {
    cy.fixture('user').as('userData');

    cy.visit('/signin');

    cy.get('[data-test="signin-username"]')
      .type('cypress_user');

    cy.get('[data-test="signin-password"]')
      .type('123456');

    cy.get('[data-test="signin-submit"]')
      .click();

    cy.url().should('not.include', '/signin');
  });

  it('Enviar dinheiro com saldo suficiente', function () {
    cy.get('[data-test="nav-top-new-transaction"]')
      .click();

    cy.get('[data-test="user-list-search-input"]')
      .type(this.userData.transaction.receiver);

    cy.get('[data-test="user-list-item"]')
      .first()
      .click();

    cy.get('[data-test="transaction-create-amount-input"]')
      .type(this.userData.transaction.amountValid);

    cy.get('[data-test="transaction-create-description-input"]')
      .type(this.userData.transaction.description);

    cy.get('[data-test="transaction-create-submit-payment"]')
      .click();

    cy.get('[data-test="alert-bar-success"]')
      .should('be.visible');
  });

  it('Enviar dinheiro com saldo insuficiente', function () {
    cy.get('[data-test="nav-top-new-transaction"]')
      .click();

    cy.get('[data-test="user-list-search-input"]')
      .type(this.userData.transaction.receiver);

    cy.get('[data-test="user-list-item"]')
      .first()
      .click();

    cy.get('[data-test="transaction-create-amount-input"]')
      .type(this.userData.transaction.amountInvalid);

    cy.get('[data-test="transaction-create-description-input"]')
      .type(this.userData.transaction.description);

    cy.get('[data-test="transaction-create-submit-payment"]')
      .click();

    cy.get('[data-test="transaction-create-error"]')
      .should('be.visible');
  });

});
