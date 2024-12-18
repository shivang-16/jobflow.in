import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg font-medium transition-all duration-200',
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'secondary' && 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;