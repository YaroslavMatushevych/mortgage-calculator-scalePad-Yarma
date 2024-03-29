'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './MortgageCalculator.module.scss';

import { formatCurrency } from '@/lib/utils';

import Button from '@/components/Button';
import InputForm from '@/components/MortgageCalculator/InputForm';
import ToastContainerComponent, {
  invokeToastNotification,
} from '@/components/Toaster';

import { calculateMortgageOnServer } from '@/app/_actions/_actions';
import { formFields } from '@/constant/mockData';

import {
  CalculatorResult,
  CalculatorState,
  mortgageCalculatorSchema,
} from '@/types';

const MortgageCalculator: React.FC = () => {
  // validation with zod or you is good. Still hesitate about usage and potencial complexity for new devs taking React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculatorState>({
    resolver: zodResolver(mortgageCalculatorSchema),
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);

  // Decided to use server actions to make request more efficient and fast.
  const onSubmit = async (data: CalculatorState) => {
    setResult(null);

    const result = await calculateMortgageOnServer(data);

    // later we can create custom notification
    if (!result.success) {
      invokeToastNotification(result.error as string);
      return;
    }

    // this part I would refactor later to format the whole payment line
    const formatedAmount = formatCurrency(result.data.payment);
    result.data.payment_schedule =
      result.data.payment_schedule === 'accel-bi-weekly'
        ? 'accelerated Bi-weekly'
        : result.data.payment_schedule;
    result.data.payment = formatedAmount;
    setResult(result.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputForm
          typeElement='input'
          type='number'
          name='price'
          label='Asking price'
          register={register}
          placeholder='$ Enter amount'
          error={errors}
        />

        <hr />

        {formFields.map((field, index) => (
          <InputForm
            key={index}
            typeElement={field.typeElement as 'input' | 'select'}
            type={field.type}
            name={field.name}
            label={field.label}
            register={register}
            options={field.options}
            error={errors}
            prefix={field.prefix}
            placeholder={field.placeholder}
          />
        ))}

        {/* place to refactor later, maybe move to another component or at least add line formatting func */}
        <div className={styles.resultContainer}>
          <div className={styles.labelResultContainer}>
            <span>=</span>
            <span>Total</span>
          </div>
          <p>
            {result ? (
              <>
                Payment:{' '}
                <span className={styles.payment}>{result.payment}</span> per{' '}
                {result.payment_schedule}
              </>
            ) : (
              <span className={styles.payment}>$-</span>
            )}
          </p>
        </div>

        <Button className={styles.submitButton} type='submit' variant='inlined'>
          Calculate
        </Button>
      </form>

      <ToastContainerComponent />
    </>
  );
};

export default MortgageCalculator;
