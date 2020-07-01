import React from 'react';
import Proptypes from 'prop-types';

const test = ({ text, pre }) => {
  return (
    <>
      <h3>{text}</h3>
      <p>{pre}</p>
    </>
  );
};

test.propTypes = {
  text: Proptypes.string.isRequired,
  pre: Proptypes.string.isRequired,
};

export default test;
