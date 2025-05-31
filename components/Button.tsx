import React from 'react'

interface ButtonProps {
  text: string;
  path: string;
}

const Button: React.FC<ButtonProps> = ({ text, path }) => {
  const isSafePath = path.startsWith('/');

  return (
    <a 
      className="rounded-md shadow-md w-max bg-blue-800 text-white px-4 py-2 text-sm hover:bg-blue-700" 
      href={isSafePath ? path : '/'}
    >
      {text}
    </a>
  );
}

export default Button