import user from '../fixtures/user.json'
import { register, login1, findProduct } from '../support/helper'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email()
user.password = faker.internet.password()
user.answer = faker.person.firstName('female');
user.name = faker.person.firstName();


it('Order', () => {
    cy.log('Authorize user')


    register(user);
    login1(user);
     
    cy.log('Find Carrot  product')
    findProduct('Carrot');
    cy.get('[aria-label="Add to Basket"]').click();
    cy.get('[aria-label="Show the shopping cart"]').click()
    cy.get('#checkoutButton').click();

    cy.log('Add user details')
    cy.get('[aria-label="Add a new address"]').click();
    cy.get('[data-placeholder="Please provide a country."]').type(user.country);
    cy.get('[data-placeholder="Please provide a name."]').type(user.name);
    cy.get('[placeholder="Please provide a mobile number."]').type(user.mobile);
    cy.get('[data-placeholder="Please provide a ZIP code."]').type(user.zip);
    cy.get('[data-placeholder="Please provide an address."]').type(user.address);
    cy.get('[data-placeholder="Please provide a city."]').type(user.city);
    cy.get('#submitButton').click();
    cy.get('.mat-radio-inner-circle').eq(0).click();
    cy.get('.mat-raised-button.mat-primary').eq(1).click();
    cy.get('.mat-radio-label').eq(2).click();
    cy.get('.nextButton ').click();
    cy.wait(3000);
    cy.get('#mat-expansion-panel-header-0').click();
    cy.get('.mat-form-field.ng-tns-c119-31 ').type(user.name);
    cy.get('.mat-form-field.ng-tns-c119-32').type('4111 1111 1111 1111');
    cy.get('mat-form-field.ng-tns-c119-33 select').select("2");
    cy.get('mat-form-field.ng-tns-c119-34 select').select("2090");
    cy.get('#submitButton').click();
    cy.get('span.mat-radio-outer-circle').click({ force: true });
    cy.log('Complete the Order');
    cy.get('[aria-label="Proceed to review"]').click();
    cy.get('[aria-label="Complete your purchase"]').click();
    cy.get('h1.confirmation').should('contain', 'Thank you for your purchase!');


})