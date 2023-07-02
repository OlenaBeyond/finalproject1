import user from '../fixtures/user.json'
import { register, login1, findProduct, userdetails, completeorder, addtocart } from '../support/helper'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email()
user.password = faker.internet.password()
user.answer = faker.person.firstName('female');
user.name = faker.person.firstName();


it('Order searched item', () => {
    cy.log('Authorize user');


    register(user);
    login1(user);
     
cy.log('Find Carrot  product');
    findProduct('Carrot');

cy.log('Add to Cart');
    addtocart();
 

cy.log('Add user details');
    userdetails(user);
    

cy.log('Complete the Order');
    completeorder()



})
