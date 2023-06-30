import loginPage from "../support/pages/LoginPage";
import {alert} from '../support/helper'
import user from '../fixtures/user.json'


it('Authorization', () => {
    cy.log('Authorize user');
    loginPage.visit();
    alert();
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('button[type="submit"]').contains('Log in').click();
  })