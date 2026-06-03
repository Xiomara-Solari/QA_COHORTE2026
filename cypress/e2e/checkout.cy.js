describe('Módulo de Checkout - Swag Labs', () => {

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://www.saucedemo.com/');
  });

  it('13.0 - Completar checkout con datos válidos', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Juan');
    cy.get('[data-test="lastName"]').type('Pérez');
    cy.get('[data-test="postalCode"]').type('5000');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').scrollIntoView().should('be.visible').click();
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
  });

  it('14.0 - Checkout sin completar campos obligatorios', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Error: First Name is required');
  });

  it('15.0 - Campo Last Name en checkout con problem_user (Verificación de Bug)', () => {
    cy.get('#user-name').type('problem_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Ana');
    cy.get('[data-test="lastName"]').type('García');
    
    cy.get('[data-test="lastName"]').should('have.value', ''); 
  });
});