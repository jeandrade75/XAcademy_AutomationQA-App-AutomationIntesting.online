describe('Enviar mensaje', {testIsolation: false}, () => {

    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.submitContactForm();
        cy.get('.alert alert-danger').should('be.visible');
        cy.validateErrorMessages([
            'Subject must be between 5 and 100 characters.',
            'Subject may not be blank',
            'Name may not be blank',
            'Message must be between 20 and 2000 characters.',
            'Message may not be blank',
            'Email may not be blank',
            'Phone may not be blank',
            'Phone must be between 11 and 21 characters.'
        ]);
    });

    it('Validar envío de form con data incorrecta', () => {
        cy.log('Set de datos incorrectos...')
        cy.fillContactForm('asd', 'asdasd', 'asdasd', 'asdasd', 'asdasd');
        cy.submitContactForm();
        cy.get('.alert alert-danger').should('be.visible');
        cy.validateErrorMessages([
            'Phone must be between 11 and 21 characters.',
            'debe ser una dirección de correo electrónico con formato correcto',
            'Message must be between 20 and 2000 characters.'
        ]);
    });

    it('Validar envío de form con data correcta', () => {
        cy.log('Set de datos correctos...')
        cy.fillContactForm('Juan Pérez', 'juan@gmail.com', '35123696457', 'Reserva de habitación para fecha X', 
            'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo');
        cy.submitContactForm();
    });

    // Puedes agregar un test para validar que el mensaje haya sido enviado con éxito usando la API.
});
