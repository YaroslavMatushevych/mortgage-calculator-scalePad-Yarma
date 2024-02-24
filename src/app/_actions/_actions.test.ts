global.fetch = jest.fn();

import { calculateMortgageOnServer } from './_actions';
import { API_URL } from '@/constant/env';

beforeEach(() => {
  (global.fetch as jest.Mock).mockClear().mockReset();
});

const validData = {
  price: 999999,
  down_payment: 200000,
  annual_interest_rate: 5,
  amortization_period: 25,
  payment_schedule: 'monthly',
};

describe('calculateMortgageOnServer', () => {
  it('successfully calculates mortgage with valid data', async () => {
    const mockResponse = {
      success: true,
      data: { payment: 2338.35, payment_schedule: 'monthly' },
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await calculateMortgageOnServer(validData);

    expect(result.success).toBe(true);
    expect(result.data).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith(
      `${API_URL}/calculate`,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validData),
      })
    );
  });

  describe('calculateMortgageOnServer error handling', () => {
    const invalidData = {
      down_payment: 240000,
      annual_interest_rate: 5,
      amortization_period: 25,
      payment_schedule: 'monthly',
    };

    it('returns an error for invalid client-side request', async () => {
      //@ts-ignore invalid data on purpose
      const result = await calculateMortgageOnServer(invalidData);

      expect(result.success).toBe(false);
      expect(result.error).toEqual({
        _errors: [],
        price: { _errors: ['Required'] },
      });
    });
  });
});
