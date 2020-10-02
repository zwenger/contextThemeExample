import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../Context/ThemeProvider';
import Button from './Button';
import '../Styles/Image.css';

const Image = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}-image image`}>
      <div className={`${theme}-ball ball`} />
      <Button text={'Switch'} />
    </div>
  );
};

Image.propTypes = {
  theme: PropTypes.string,
};

export default Image;
