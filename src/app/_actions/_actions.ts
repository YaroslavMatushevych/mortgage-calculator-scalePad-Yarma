'use server';

// Used native fetch instead of axios because of issues in server actions with testing
// it's quite new feature so sometimes happens unexpected issues with supporting
import { CalculatorState, mortgageCalculatorSchema } from '@/types';
import { API_URL } from '@/constant/env';

export async function calculateMortgageOnServer(data: CalculatorState) {
  const validationResult = mortgageCalculatorSchema.safeParse(data);

  if (!validationResult.success) {
    return { success: false, error: validationResult.error.format() };
  }

  try {
    const response = await fetch(`${API_URL}/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validationResult.data),
    });

    if (!response.ok) {
      const text = await response.text();

      throw new Error(text);
    }

    const responseData = await response.json();
    return { success: true, data: responseData };
  } catch (error: unknown) {
    let errorMessage = 'An error occurred during calculation.';
    if (error instanceof Error && error.message) {
      errorMessage = error.message;
    }
    return {
      success: false,
      error: errorMessage,
    };
  }
}
