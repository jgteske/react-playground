'use client';

import React from 'react';
import './Button.css';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  styles?: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}

const Button = ({ type = 'button', disabled = false, ...props }: Props) => {
  return (
    <button
      className={`${props.styles} custom-button-style px-3 py-2 rounded-lg hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700 w-full bg-violet-500`}
      type={type}
      disabled={disabled}
      {...props}>
      {props.children}
    </button>
  );
};

export default Button;
