export interface CalculatorState {
  price: number;
  down_payment: number;
  annual_interest_rate: number;
  amortization_period: number;
  payment_schedule: string;
}

export interface CalculatorResult {
  payment: number;
  payment_schedule: string;
}
