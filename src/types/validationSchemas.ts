import { z } from 'zod';

export const mortgageCalculatorSchema = z.object({
  price: z
    .number()
    .positive('Property price must be positive')
    .min(1, 'Property price is required'),
  down_payment: z
    .number()
    .positive('Down payment must be positive')
    .min(1, 'Down payment is required'),
  annual_interest_rate: z
    .number()
    .positive('Interest rate must be positive')
    .min(0.1, 'Annual interest rate is required')
    .max(100, 'Annual interest rate is max 100%'),
  amortization_period: z.number().int().min(5).max(30).step(5),
  payment_schedule: z.enum(['accel-bi-weekly', 'bi-weekly', 'monthly']),
});
