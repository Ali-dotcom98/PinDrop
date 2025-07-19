import React from 'react';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50"
    >
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full motion-safe:animate-spin"></div>
        <div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-emerald-500 rounded-full motion-safe:animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
        ></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
