# Cypress Automation for Automation In Testing
This project contains automated tests for the website Automation In Testing, using the Cypress testing framework.

# Table of Contents
- Project Overview
- Installation
- Running Tests
- Test Scenarios
- Custom Commands
- Folder Structure
- Contributing
- License

## Project Overview
This project automates various test scenarios for the Automation In Testing website, focusing on validating the functionality of forms, text validation, and API requests using Cypress. The key tests include:

- Validating that the text of the hotel description matches the expected text.
- Filling out and submitting the contact form with Name, Email, Phone, Subject, and Message fields.
- Using cy.intercept to validate API requests and responses for the form submissions.

## Installation
- To run this project locally, you'll need to have Node.js and npm installed on your machine.
- Clone the repository:

### git clone <repository-url>
### cd <repository-directory>

Install the dependencies:
### npm install

## Running Tests
- You can run the tests using Cypress UI or in the headless mode.
- Running Tests in Cypress UI
### npx cypress open

This will open the Cypress Test Runner, where you can select the test to run.

- Running Tests in Headless Mode
### npx cypress run

This will run all tests in the command line.

## Test Scenarios
The project includes the following test scenarios:

- Hotel Description Validation:
Ensures that the hotel description on the homepage matches the expected text.

- Contact Form Submission:
Fills out the contact form with valid data and submits it.
Validates that the form submission triggers the correct API request using cy.intercept.

- Form Validation Testing:
Tests the form validation by attempting to submit the form with invalid or missing data.
Validates that appropriate error messages are displayed.

- Custom Commands
This project includes custom Cypress commands to streamline repetitive tasks, such as filling out the contact form and verifying the API requests.

## Example Custom Command
javascript
### Cypress.Commands.add('fillContactForm', (name, email, phone, subject, message) => {
###    cy.get('[data-test=name]').type(name);
###    cy.get('[data-test=email]').type(email);
###    cy.get('[data-test=phone]').type(phone);
###    cy.get('[data-test=subject]').type(subject);
###    cy.get('[data-test=message]').type(message);
### });

## Folder Structure
- cypress/integration: Contains the test cases.
- cypress/support: Contains custom commands and other support files.
- cypress/fixtures: Contains test data and other fixture files.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
