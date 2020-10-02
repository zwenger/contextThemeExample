import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../Context/ThemeProvider';
import '../Styles/Button.css';

const Button = (props) => {
  const { text } = props;
  const { changeTheme } = useContext(ThemeContext);

  return (
    <button onClick={changeTheme} className='button'>
      {text}
      <span role='img' aria-label='sun'>
        🌞
      </span>
      <span role='img' aria-label='moon'>
        🌚
      </span>
    </button>
  );
};

Button.defaultProps = {
  text: 'Button ',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  changeTheme: PropTypes.func,
};

export default Button;
