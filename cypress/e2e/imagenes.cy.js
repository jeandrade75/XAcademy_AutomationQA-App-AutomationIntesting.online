describe('Validar imágenes visibles en la página', () => {
    it('Debería haber al menos una imagen visible en la página', () => {
      // Visita la página
      cy.visit('https://automationintesting.online/');
      
      // Verifica que haya al menos una imagen visible en la página
      cy.get('img').should('be.visible').should('have.length.greaterThan', 0);
    });
  });
  