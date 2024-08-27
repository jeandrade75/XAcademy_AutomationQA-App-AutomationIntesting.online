describe('Validar la información de contacto en Shady Meadows B&B', () => {
  beforeEach(() => {
    // Navegar a la página de Automation in Testing
    cy.visit('https://automationintesting.online/');
  });

  it('Debería mostrar la dirección correcta', () => {
    cy.contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
      .should('be.visible');
  });

  it('Debería mostrar el número de teléfono correcto', () => {
    cy.contains('012345678901')
      .should('be.visible');
  });

  it('Debería mostrar el correo electrónico correcto', () => {
    cy.contains('fake@fakeemail.com')
      .should('be.visible');
  });
});
