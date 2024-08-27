describe('Form Book Test', () => {
    it('should fill the form and book it, intercepting the POST request', () => {
        cy.visit('https://automationintesting.online/');
        cy.get('.col-sm-7 > .btn').click()
        cy.intercept('POST', 'https://automationintesting.online/booking/').as('formBookingError');
        cy.get('.room-booking-form > .form-control').type('Juan');
        cy.get('.col-sm-4 > :nth-child(2) > .form-control').type('Lopez');
        cy.get('.col-sm-4 > :nth-child(3) > .form-control').type('johndoe@example.com');
        cy.get('.col-sm-4 > :nth-child(4) > .form-control').type('12345678908');
        cy.get('.col-sm-4 > .btn-outline-primary').click()
        cy.wait('@formBookingError').then((interception) => {
            expect(interception.response.statusCode).to.eq(400); // Validar que la respuesta no fue exitosa
            cy.log('No campeon, no es por ahi')
          
            });
        });
    });

