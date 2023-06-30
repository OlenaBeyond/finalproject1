

import { faker } from '@faker-js/faker'
import user from '../fixtures/user.json'
import {register, login} from '../support/helper'

user.email = faker.internet.email();
user.password = faker.internet.password();
user.answer = faker.person.firstName('female');




it('Register user', () => {
  register(user)
  

})

it('Authorization', () => {
  login(user)
  
})