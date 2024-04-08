import { useState } from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import ErrorMessage from '@/components/form/ErrorMessage';
import HelperText from '@/components/form/HelperText';
import LabelText from '@/components/form/LabelText';
import clsxm from '@/lib/clsxm';

export type InputProps = {
  id: string;
  label?: string;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  type = 'text',
  readOnly = false,
  rightIconClassName,
  helperTextClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const error = get(errors, id);

  return (
    <div className='w-full space-y-2'>
      {label && (
        <LabelText required={validation?.required ? true : false}>
          {label}
        </LabelText>
      )}

      <div className='relative flex w-full gap-0'>
        <div
          className={clsxm(
            'pointer-events-none absolute h-full w-full rounded-md border-[#808080] ring-1 ring-inset ring-[#808080]',
          )}
        />

        <div
          className={clsxm(
            'relative w-full rounded-md',
          )}
        >

          <input
            {...register(id, validation)}
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            id={id}
            name={id}
            readOnly={readOnly}
            disabled={readOnly}
            className={clsxm(
              'h-full w-full rounded-md border-none px-3 py-2.5',
              'ring-1 ring-typo-outline1 focus:ring-typo-outline1 focus:ring-inset',
              'focus:outline-1 focus:outline-success-active',
              'bg-typo-white text-bodytext',
              'hover:ring-2 hover:ring-success-main',
              'placeholder:text-bodytext placeholder:text-[#9AA2B1] focus:placeholder:text-typo-secondary',
              readOnly && 'cursor-not-allowed',
              error &&
                'border-none ring-2 ring-inset ring-danger-main placeholder:text-typo-secondary focus:ring-danger-main focus:outline-danger-active',
              className,
            )}
            aria-describedby={id}
            {...rest}
          />

          {type === 'password' && (
            <div
              className={clsxm(
                'absolute bottom-0 right-0 h-full',
                'flex items-center justify-center pr-3',
                'text-lg text-typo-outline-1 md:text-xl',
                rightIconClassName,
              )}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEye /> : <HiEyeOff />}
            </div>
          )}
        </div>

      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {helperText && (
        <HelperText helperTextClassName={helperTextClassName}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
}