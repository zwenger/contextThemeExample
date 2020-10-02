import React from 'react';
import './App.css';
import Image from './Components/Image';
import ThemeProvider from './Context/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <div className='app'>
        <Image />
      </div>
    </ThemeProvider>
  );
};

export default App;
