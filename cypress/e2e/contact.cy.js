import { alert } from '../support/helper'

it('Contact', () => {
    cy.visit('/')
    alert()
    cy.log('Leave the feedback');

    cy.get('[aria-label="Open Sidenav"]').click();
    cy.get('[routerlink="/contact"] ').click();
    cy.get('#comment').type("Satisfied with the service");
    cy.get('[aria-label="Slider for selecting the star rating"]').type('{rightarrow}');
    cy.get('[aria-label="CAPTCHA code which must be solved"]').then(($captcha) => {
        const captchaCode = $captcha.text().trim();
        const result = eval(captchaCode);
        cy.get('#captchaControl').type(result)
        cy.get('[type="submit"]').click()
        cy.get('[aria-hidden="true"]').should('contain', 'Thank you for your feedback.')

    })
})
