export const navListData = [
  {
    name: 'Mortgage Calculator',
    link: '/',
    active: true,
  },
  {
    name: 'Credit Cards',
  },
  {
    name: 'Banking',
  },
  {
    name: 'Investing',
  },
  {
    name: 'Insurance',
  },
  {
    name: 'More',
  },
];

export const formFields = [
  {
    typeElement: 'input',
    name: 'down_payment',
    label: 'Down Payment',
    prefix: '-',
    placeholder: '$ Enter amount',
  },
  {
    typeElement: 'input',
    name: 'annual_interest_rate',
    label: 'Annual Interest Rate',
    prefix: '%',
    placeholder: '% Enter rate',
  },
  {
    typeElement: 'select',
    name: 'amortization_period',
    label: 'Amortization Period',
    options: [
      { value: '5', label: '5 years' },
      { value: '10', label: '10 years' },
      { value: '15', label: '15 years' },
      { value: '20', label: '20 years' },
      { value: '25', label: '25 years' },
      { value: '30', label: '30 years' },
    ],
  },
  {
    typeElement: 'select',
    name: 'payment_schedule',
    label: 'Payment Schedule',
    options: [
      { value: 'accelerated bi-weekly', label: 'Accelerated Bi-weekly' },
      { value: 'bi-weekly', label: 'Bi-weekly' },
      { value: 'monthly', label: 'Monthly' },
    ],
  },
];
