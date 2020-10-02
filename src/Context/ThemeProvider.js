import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({
  theme: '',
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Day');

  const changeTheme = () => {
    setTheme(theme === 'Day' ? 'Night' : 'Day');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.string,
};

export default ThemeProvider;
