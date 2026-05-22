import { DioAccount } from "./DioAccount";

export class RandomAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus() || this.getBalance() >= value){
            const total: number = this.getBalance() + value + 10
            this.setBalance(total)
            console.log('Voce depositou')
        }
    }

    
    
    

    
}
