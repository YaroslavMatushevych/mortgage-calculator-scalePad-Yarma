export const formatCurrency = (amount: number): string => {
  // Format the amount with two decimal places and thousands separators
  const formattedAmount: string = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return formattedAmount;
};
