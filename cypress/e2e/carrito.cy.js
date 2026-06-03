describe('Módulo de Carrito - Swag Labs', () => {

  beforeEach(() => {
    cy.viewport(1280, 720); 
    cy.visit('https://www.saucedemo.com/');
    
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.shopping_cart_link').as('iconoCarrito');
  });

  it('10.0 - Agregar un producto al carrito', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').and('have.text', 'Remove');
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('11.0 - Agregar múltiples productos y verificar contador', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    
    cy.get('.shopping_cart_badge').should('have.text', '3');
  });

  it('12.0 - Eliminar un producto desde la página del carrito', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('@iconoCarrito').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    
    cy.get('.cart_item').should('not.exist');
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});