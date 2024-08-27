describe('Enviar mensaje', { testIsolation: false }, () => {

    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.validateEmptyFormSubmission();
    });

});

