describe('Login', () => {

  beforeEach(() => {
    cy.fixture('user').as('userData');
    cy.visit('/signin');
  });

  it('Login com sucesso', function () {
    cy.get('[data-test="signin-username"]')
      .type(this.userData.validUser.username);

    cy.get('[data-test="signin-password"]')
      .type(this.userData.validUser.password);

    cy.get('[data-test="signin-submit"]')
      .click();

    cy.url().should('not.include', '/signin');
    cy.get('[data-test="sidenav-username"]').should('be.visible');
  });

  it('Tentar fazer login com credenciais inválidas', function () {
    cy.get('[data-test="signin-username"]')
      .type(this.userData.invalidUser.username);

    cy.get('[data-test="signin-password"]')
      .type(this.userData.invalidUser.password);

    cy.get('[data-test="signin-submit"]')
      .click();

    cy.get('[data-test="signin-error"]')
      .should('contain', 'Username or password is invalid');
  });

});
