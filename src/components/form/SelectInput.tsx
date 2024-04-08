import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiChevronDown } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import ErrorMessage from './ErrorMessage';
import HelperText from './HelperText';
import LabelText from './LabelText';

export type SelectInputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  readOnly?: boolean;
  placeholder?: string;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  readOnly = false,
  defaultValue = '',
  placeholder = '',
  children,
  ...rest
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = get(errors, id);
  const value = watch(id);

  return (
    <div className='w-full space-y-1.5 rounded-md'>
      {label && (
        <LabelText required={validation?.required ? true : false}>
          {label}
        </LabelText>
      )}

      <div className='relative'>
        <select
          {...register(id, validation)}
          id={id}
          name={id}
          defaultValue={defaultValue}
          disabled={readOnly}
          className={clsxm(
            'w-full appearance-none truncate rounded-md border-none py-2.5 pl-3 pr-8',
            'ring-1 ring-typo-outline1 focus:ring-typo-outline1',
            'bg-typo-white text-bodytext text-typo-secondary',
            'hover:ring-2 hover:ring-success-main',
            readOnly && 'cursor-not-allowed',
            error
              ? 'border-none ring-2 ring-inset ring-danger-main placeholder:text-typo-secondary focus:ring-danger-main focus:outline-danger-active'
              : 'focus:ring-typo-outline1',
            value && 'ring-typo-main focus:ring-typo-main',
            className,
          )}
          aria-describedby={id}
          {...rest}
        >
          {placeholder && (
            <option value='' disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          <FiChevronDown className='text-paragraph text-typo-outline1' />
        </div>
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </div>
  );
}