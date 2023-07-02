class LoginPage {
    visit() {
        cy.log('Open website login page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login')


    }
}
export default new LoginPage();
