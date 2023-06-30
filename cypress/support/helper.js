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