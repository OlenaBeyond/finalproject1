class HomePage {
    visit() {
        cy.log('Open website home page');
        cy.visit('/');

        cy.get('#mat-dialog-0');

        cy.get('[aria-label="Close Welcome Banner"]').click();
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
    }    
}

export default new HomePage();