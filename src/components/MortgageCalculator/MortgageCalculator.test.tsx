import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import * as actions from '@/app/_actions/_actions';

import MortgageCalculator from './';

jest.mock('@/app/_actions/_actions');

const mockCalculateMortgageOnServer =
  actions.calculateMortgageOnServer as jest.Mock;

describe('MortgageCalculator Component', () => {
  const validData = {
    price: 999999,
    down_payment: 200000,
    annual_interest_rate: 5,
    amortization_period: '25',
    payment_schedule: 'monthly',
  };

  beforeEach(() => {
    mockCalculateMortgageOnServer.mockClear();
  });

  it('handles valid data submission', async () => {
    mockCalculateMortgageOnServer.mockResolvedValue({
      success: true,
      data: { payment: 14087303.93, payment_schedule: 'accel-bi-weekly' },
    });

    render(<MortgageCalculator />);

    fireEvent.change(screen.getByLabelText(/asking price/i), {
      target: { value: validData.price },
    });
    fireEvent.change(screen.getByLabelText(/down payment/i), {
      target: { value: validData.down_payment },
    });
    fireEvent.change(screen.getByLabelText(/annual interest rate/i), {
      target: { value: validData.annual_interest_rate },
    });

    // For selects, use the visible text of the options to simulate user selection
    fireEvent.change(screen.getByLabelText(/amortization period/i), {
      target: { value: validData.amortization_period },
    });
    fireEvent.change(screen.getByLabelText(/payment schedule/i), {
      target: { value: validData.payment_schedule },
    });

    fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

    await waitFor(() => {
      expect(mockCalculateMortgageOnServer).toHaveBeenCalledWith(
        expect.anything()
      );
      expect(screen.getByText(`$14,087,303.93`)).toBeInTheDocument();
      expect(
        screen.getByText(/Payment:.*accelerated Bi-weekly/)
      ).toBeInTheDocument();
    });
  });
});
