import { Metadata } from 'next';
import React from 'react';

import styles from './page.module.scss';

import MortgageCalculator from '@/components/MortgageCalculator';

export const metadata: Metadata = {
  title: 'Mortgage Calculator',
  description:
    'Mortgage Calculator you can calculate your mortgage in BC with mortcalc.ca',
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>BC CMHC Insurance</h1>
        <p className={styles.description}>
          In Canada, homebuyers with less than 20% down payment require mortgage
          default insurance, or CMHC insurance. Mortgage default insurance
          protects lenders in the event a home buyer defaults. Thanks to this
          protection, lenders can offer lower mortgage rates for mortgages with
          lower down payments.
        </p>
        <div className={styles.formTitle}>
          <h2>Mortcalc.ca's BC CMHC calculator</h2>
        </div>
        <MortgageCalculator />
      </section>
    </main>
  );
}
