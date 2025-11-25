import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md active:scale-95 text-center";
  
  const variants = {
    // Primary: Purple background, Dark Navy text for high contrast and brand identity
    primary: "bg-brand-primary text-brand-secondary hover:bg-opacity-90 hover:shadow-lg", 
    // Outline: Purple border and text
    outline: "border-2 border-brand-primary text-brand-secondary hover:bg-brand-primary hover:text-brand-secondary"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;