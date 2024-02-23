import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className={styles.section}>
        <div>
          <RiAlarmWarningFill size={60} className={styles.icon} />
          <h1>Page Not Found</h1>
          <Link href='/'>Back to home</Link>
        </div>
      </section>
    </main>
  );
}
