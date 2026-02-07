export interface DepositPackage {
  id: string
  amount: number
  bonus: number
  popular?: boolean
}

export const DEPOSIT_PACKAGES: DepositPackage[] = [
  {
    id: 'deposit-50',
    amount: 50,
    bonus: 0,
  },
  {
    id: 'deposit-100',
    amount: 100,
    bonus: 10,
    popular: true,
  },
  {
    id: 'deposit-200',
    amount: 200,
    bonus: 15,
  },
  {
    id: 'deposit-500',
    amount: 500,
    bonus: 20,
  },
  {
    id: 'deposit-1000',
    amount: 1000,
    bonus: 25,
  },
  {
    id: 'deposit-2000',
    amount: 2000,
    bonus: 30,
  },
]
