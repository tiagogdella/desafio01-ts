export abstract class DioAccount {
  private readonly name!: string 
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  getBalance = (): number => {
    return this.balance
  }

  getStatus = (): boolean => {
    return this.status
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus() || this.balance >= value){
      this.balance = Number(this.balance) + value
      console.log('Voce depositou')
    }
  }

  withdraw = (): void => {
    console.log('Voce sacou')
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
