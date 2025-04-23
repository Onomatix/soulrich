
import React from 'react';

export const SpotifyIcon = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14.5c2.9-.9 5.1-.7 8 .5"/>
    <path d="M8 11.5c3.8-1.2 7.2-1 11 .5"/>
    <path d="M8 8.5c4.8-1.5 9.2-1.2 14 .5"/>
  </svg>
);
