describe('Login', () => {

  beforeEach(() => {
    cy.fixture('user').as('userData');
  });

  it('Login com sucesso', function () {
    cy.login(
      this.userData.validUser.username,
      this.userData.validUser.password
    );

    cy.url().should('include', '/');
    cy.get('[data-test="sidenav-username"]').should('be.visible');
  });

  it('Tentar fazer login com credenciais inválidas', function () {
    cy.login(
      this.userData.invalidUser.username,
      this.userData.invalidUser.password
    );

    cy.get('[data-test="signin-error"]').should(
      'contain',
      'Username or password is invalid'
    );
  });

});
