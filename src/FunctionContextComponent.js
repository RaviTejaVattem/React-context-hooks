import React from 'react';
import { useTheme } from './ThemeContext';

export default function FunctionContextComponent() {
  const theme = useTheme();
  const themeStyles = {
    backgroundColor: theme.darkTheme ? '#333' : '#CCC',
    color: theme.darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <>
      <button onClick={theme.toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
