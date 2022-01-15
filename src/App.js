import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import './style.css';
import { ThemeProvider } from './ThemeContext';

export const ThemeContext = React.createContext();

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
