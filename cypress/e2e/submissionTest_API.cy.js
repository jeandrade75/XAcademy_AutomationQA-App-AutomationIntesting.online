describe('Form Submission Test', () => {
    it('should fill the form and submit it, intercepting the POST request', () => {
        // Visitar la página
        cy.visit('https://automationintesting.online/');

        // Interceptar la solicitud POST del formulario
        cy.intercept('POST', 'https://automationintesting.online/message/').as('formSubmit');

        // Llenar el formulario
        cy.get('[placeholder="Name"]').type('Juan Lopez');
        cy.get('[placeholder="Email"]').type('johndoe@example.com');
        cy.get('[placeholder="Phone"]').type('12345678908');
        cy.get('[placeholder="Subject"]').type('Test Subject');
        cy.get('[data-testid="ContactDescription"]').type('Este es un mensaje de prueba API.');
        //cy.get('.form-control').type('Este es un mensaje de prueba API.');

        // Hacer clic en el botón de submit
       
        cy.get('#submitContact').click();

        // Esperar a que la solicitud POST ocurra y validar
        cy.wait('@formSubmit').then((interception) => {
            expect(interception.response.statusCode).to.eq(201); // Validar que la respuesta fue exitosa
            //cy.log('Felicidades , se creo el usuario')
            expect(interception.request.body).to.include({
                name: 'Juan Lopez',
                email: 'johndoe@example.com',
                phone: '12345678908',
                subject: 'Test Subject',
                description: 'Este es un mensaje de prueba API.'
            });
        });
    });
});
