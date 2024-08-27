describe('Hotel Description Validation', () => {
    it('should validate the hotel description text', () => {
      // Visita la página principal
      cy.visit('https://automationintesting.online/');
  
      // Obtén el elemento que contiene la descripción del hotel y verifica su texto
      cy.get('.col-sm-10 > p') // Reemplaza esto con el selector real

        .should('have.text', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
    });
  });
  