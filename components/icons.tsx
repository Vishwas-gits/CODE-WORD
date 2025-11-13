
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const LogoIcon: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 15.5L4 12L7.5 8.5M16.5 15.5L20 12L16.5 8.5M13 5.5L11 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BugIcon: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 13H9V9H15ZM12 16V13M8 13H5.5C4.09 13 3 11.71 3 10.25V7.75C3 6.29 4.09 5 5.5 5H18.5C19.91 5 21 6.29 21 7.75V10.25C21 11.71 19.91 13 18.5 13H16M6 5L8 2M18 5L16 2M5 13L3 19M19 13L21 19" />
  </svg>
);

export const OptimizeIcon: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" />
  </svg>
);

export const ExplainIcon: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 16V12M12 8H12.01M15.5355 15.5355L18 18M5.99999 5.99999L8.46445 8.46445" />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20.02L12 17.27L7.09 20.02L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
    </svg>
);

export const BrainIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 3C7.52 3.3 6.13 4.1 5.34 5.34C3.34 8.04 4.54 12.44 7.24 14.34C8.04 14.94 8.94 15.24 9.94 15.24C10.64 15.24 11.34 15.04 11.94 14.64C12.34 14.34 12.64 14.04 12.94 13.64C13.24 13.24 13.54 12.84 13.74 12.34C14.04 11.54 14.24 10.64 14.24 9.74C14.24 8.24 13.84 6.84 13.04 5.64C12.24 4.44 11.04 3.54 9.5 3Z" />
        <path d="M14.5 3C15.4 3.3 16.2 3.8 16.9 4.6C17.6 5.4 18 6.3 18.2 7.3C18.4 8.3 18.2 9.3 17.8 10.2C17.4 11.1 16.8 11.9 16.1 12.6C15.4 13.3 14.6 13.9 13.7 14.2C12.8 14.5 11.8 14.5 10.9 14.2C10 13.9 9.2 13.3 8.5 12.6" />
        <path d="M6.5 16C5.5 16.3 4.6 16.8 3.9 17.5C3.2 18.2 2.8 19.1 2.6 20" />
        <path d="M17.5 16C18.5 16.3 19.4 16.8 20.1 17.5C20.8 18.2 21.2 19.1 21.4 20" />
    </svg>
);
