import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', href }) => {
  const baseClasses = "bg-white border border-stone-200/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out";
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} block cursor-pointer ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};