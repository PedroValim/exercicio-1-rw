describe('Registro de Usuário', () => {

  beforeEach(() => {
    cy.fixture('user').as('userData');
    cy.visit('/signup');
  });

  it('Registro de novo usuário com sucesso', function () {
    cy.get('[data-test="signup-first-name"]').type(this.userData.newUser.firstName);
    cy.get('[data-test="signup-last-name"]').type(this.userData.newUser.lastName);
    cy.get('[data-test="signup-username"]').type(this.userData.newUser.username);
    cy.get('[data-test="signup-password"]').type(this.userData.newUser.password);
    cy.get('[data-test="signup-confirmPassword"]').type(this.userData.newUser.confirmPassword);

    cy.get('[data-test="signup-submit"]').click();

    cy.url().should('include', '/signin');
  });

  it('Tentar registrar usuário com informações incompletas', () => {
    cy.get('[data-test="signup-submit"]').click();

    cy.get('[data-test="signup-first-name"]').should('have.attr', 'aria-invalid');
    cy.get('[data-test="signup-last-name"]').should('have.attr', 'aria-invalid');
    cy.get('[data-test="signup-username"]').should('have.attr', 'aria-invalid');
    cy.get('[data-test="signup-password"]').should('have.attr', 'aria-invalid');
  });

});
