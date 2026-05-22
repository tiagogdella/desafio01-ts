import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { RandomAccount } from './class/RandomAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(500)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(500)
console.log(companyAccount)
companyAccount.getLoan(500)
console.log(companyAccount)
const random: RandomAccount = new RandomAccount("jorge", 99)
random.deposit(50)
console.log(random)