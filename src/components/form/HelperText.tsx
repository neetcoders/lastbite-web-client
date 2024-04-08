import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

export default function HelperText({
  children,
  helperTextClassName,
}: {
  children: ReactNode;
  helperTextClassName?: string;
}) {
  return (
    <div className='flex space-x-1'>
      <p
        className={clsxm(
          'text-bodytext !leading-tight text-typo-main',
          helperTextClassName,
        )}
      >
        {children}
      </p>
    </div>
  );
}