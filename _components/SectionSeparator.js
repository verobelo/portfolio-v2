import React from 'react';

const SectionSeparator = ({ variant = 'gradient', className = '' }) => {
  const variants = {
    wave: (
      <div className={`w-full flex justify-center py-6 ${className}`}>
        <svg
          width='100'
          height='20'
          viewBox='0 0 100 20'
          className='opacity-30'>
          <path
            d='M0 10 Q 25 0 50 10 T 100 10'
            stroke='url(#gradient)'
            strokeWidth='2'
            fill='none'
          />
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#6366f1' />
              <stop offset='100%' stopColor='#ec4899' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),

    shadow: (
      <div className={`w-full relative ${className}`}>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent shadow-sm' />
      </div>
    ),
  };

  return variants[variant];
};

export default SectionSeparator;
