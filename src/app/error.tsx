'use client'; // Error components must be Client Components

import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import styles from './not-found.module.scss';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className={styles.section}>
        <div>
          <RiAlarmWarningFill size={60} className={styles.icon} />
          <h1>Oops, something went wrong!</h1>
          <Link href='/'>Back to home</Link>
        </div>
      </section>
    </main>
  );
}
