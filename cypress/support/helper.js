export function alert() {
      cy.get('#mat-dialog-0');
      cy.get('[aria-label="Close Welcome Banner"]').click();

}


export function login(user) {
      cy.log('Login user');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login')
      cy.get('#mat-dialog-0');

      cy.get('[aria-label="Close Welcome Banner"]').click();
      cy.get('#navbarAccount').click();
      cy.get('#navbarLoginButton').click();
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('button[type="submit"]').contains('Log in ').click();

}

export function findProduct(productName){
      cy.get('.mat-search_icon-search').click();
      cy.get('#mat-input-0').type(productName).type('{enter}');

} 

export function addtocart(productName){
      cy.get('[aria-label="Add to Basket"]').click();
    cy.get('[aria-label="Show the shopping cart"]').click()
    cy.wait(3000)
    cy.get('#checkoutButton').click();
      
  
} 

export function register(user) {


      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('#mat-dialog-0');

      cy.get('[aria-label="Close Welcome Banner"]').click();

      cy.get('#emailControl').type(user.email);
      cy.get('#passwordControl').type(user.password);
      cy.get('#repeatPasswordControl').type(user.password);
      cy.get('[name="securityQuestion"]').click();
      cy.get('#mat-option-7').click();
      cy.get('#securityAnswerControl').type(user.answer);

      cy.get('#registerButton').click();
}

export function login1(user) {
      cy.log('Login user');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login')

      cy.get('#navbarAccount').click();
      cy.get('#navbarLoginButton').click();
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('button[type="submit"]').contains('Log in ').click();

}

export function userdetails(user) {
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

}

export function completeorder() {
      cy.get('[aria-label="Proceed to review"]').click();
    cy.get('[aria-label="Complete your purchase"]').click();
    cy.get('h1.confirmation').should('contain', 'Thank you for your purchase!');

}
