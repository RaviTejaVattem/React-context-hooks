import React, { useState } from 'react';
import './style.css';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
    <ThemeContext.Provider>
      <button onClick>Toggle Theme</button>
    </ThemeContext.Provider>
    </>
  );
}
