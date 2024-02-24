import { formatCurrency } from './';

describe('formatCurrency', () => {
  it('formats small numbers correctly', () => {
    expect(formatCurrency(123)).toBe('$123.00');
  });

  it('formats large numbers with thousands separators correctly', () => {
    expect(formatCurrency(1234567)).toBe('$1,234,567.00');
  });

  it('rounds to two decimal places correctly - rounding down', () => {
    expect(formatCurrency(123.456)).toBe('$123.46');
  });

  it('rounds to two decimal places correctly - rounding up', () => {
    expect(formatCurrency(123.454)).toBe('$123.45');
  });

  it('formats zero correctly', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('handles negative numbers correctly', () => {
    expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
  });
});
