import React from 'react';
import { cn } from '../lib/utils';

export function Container({ children, className }) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 2xl:max-w-[1440px]', className)}>
      {children}
    </div>
  );
}

